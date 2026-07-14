import { useEffect, useState } from "react"
import { archiveApplicant, getApplicants, updateApplicantStatus } from "../../api/api"
import '../../styles/Applicants.css'

const STATUS_OPTIONS = ['New Lead', 'Interviewing', 'Hired', 'Declined']

const Applications = () => {
  const [applicants,setApplicants] = useState([])
  const[loading,setLoading] =useState(true)
  const [search,setSearch] = useState('')
  const [selected,setSelected]=useState(null)
  const [statusFilter,setStatusFilter] =useState('')
  const [pendingStatus, setPendingStatus] = useState('')

//fetch the applicants upon mounting

  useEffect(()=>{
      const fetchApplicants = async () => {
      try {
        const data = await getApplicants()
        setApplicants(data)
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchApplicants()
  },[])


  //check if loading 
   const handleSelect = (applicant) => {
    setSelected(applicant)
    setPendingStatus(applicant.status)
  }

    const handleSaveStatus = async () => {
    try {
      const updated = await updateApplicantStatus(selected._id, pendingStatus)
      setApplicants((prev) =>
        prev.map((a) => (a._id === updated._id ? updated : a))
      )
      setSelected(updated)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleArchive = async () => {
    try {
      const archived = await archiveApplicant(selected._id)
      setApplicants((prev) => prev.filter((a) => a._id !== archived._id))
      setSelected(null)
    } catch (error) {
      console.error(error.message)
    }
  }

  const filtered = applicants.filter((a)=>{


    const matchesSearch = `${a.fName} ${a.sName}`.toLowerCase().includes(search.toLowerCase()) ||a.position.toLowerCase().includes(search.toLowerCase())

    const matchStatus = statusFilter ? a.status === statusFilter :true

    return matchStatus && matchesSearch
  })

   const statusClass = (status) => {
    switch (status) {
      case 'Hired': return 'status-hired'
      case 'Interviewing': return 'status-interviewing'
      case 'New Lead': return 'status-new'
      default: return 'status-declined'
    }
  }

  if(loading) return <p>Loading Applicants ⌛️</p>

      return (
    <div className="applicants-page">
      <div>Applicants</div>
      <div className="applicants-controls">
        <input
         type="text" 
         placeholder="Search by name or position"
         value={search}
         onChange={(e)=> setSearch(e.target.value)}
         />

         <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {
            STATUS_OPTIONS.map((s)=>(
              <option key={s} value={s}>{s}</option>
            ))
          }
         </select>

      </div>
      <div className="applicants-layout">
        <div className="applicants-table">
          <div className="table-header">
            <span>Name</span>
            <span>Position</span>
            <span>Applied</span>
            <span>Status</span>
          </div>

          {filtered.map((a) => (
            <div
              key={a._id}
              className={`table-row ${selected?._id === a._id ? 'row-active' : ''}`}
              onClick={() => handleSelect(a)}
            >
              <span>{a.fName} {a.sName}</span>
              <span>{a.position}</span>
              <span>{new Date(a.createdAt).toLocaleDateString()}</span>
              <span className={`status-badge ${statusClass(a.status)}`}>{a.status}</span>
            </div>
          ))}
           {filtered.length === 0 && <p className="empty-state">No applicants found.</p>}
        </div>

        {selected && (
          <div className="inspector-panel">
            <div className="inspector-header">
              <h3>{selected.fName} {selected.sName}</h3>
              <button className="close-btn" onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="inspector-section">
              <p className="section-label">Contact</p>
              <p><a href={`mailto:${selected.email}`}>{selected.email}</a></p>
              <p>{selected.number}</p>
            </div>

            <div className="inspector-section">
              <p className="section-label">Skills</p>
              <p>{selected.skills || 'Not provided'}</p>
            </div>

            <div className="inspector-section">
              <p className="section-label">Resume</p>
              <a href={selected.resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">
                View resume
              </a>
            </div>

            <div className="inspector-section">
              <p className="section-label">Update status</p>
              <select value={pendingStatus} onChange={(e) => setPendingStatus(e.target.value)}>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button className="save-btn" onClick={handleSaveStatus}>Save changes</button>
            </div>

            <button className="archive-btn" onClick={handleArchive}>Archive profile</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Applications