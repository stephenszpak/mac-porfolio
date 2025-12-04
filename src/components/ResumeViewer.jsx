import pdfUrl from '../assets/resume_2025.pdf'

const ResumeViewer = () => {
  const previewUrl = `${pdfUrl}#navpanes=0`
  return (
    <div style={{ display: 'grid', gap: 10, padding: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 12, color: '#374151' }}>PDF Preview</div>
        <a href={pdfUrl} download style={{ fontSize: 12, color: '#0b5fff' }}>Download</a>
      </div>
      <object
        data={previewUrl}
        type="application/pdf"
        aria-label="Resume PDF"
        style={{ width: '100%', height: '70vh', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8 }}
      >
        <iframe
          src={previewUrl}
          title="Resume PDF"
          style={{ width: '100%', height: '70vh', border: 'none' }}
        />
      </object>
      <div style={{ fontSize: 12, color: '#6b7280' }}>
        If the PDF preview doesn’t load, use the Download link above.
      </div>
    </div>
  )
}

export default ResumeViewer
