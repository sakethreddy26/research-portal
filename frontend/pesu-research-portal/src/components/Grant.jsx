import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import ResearchPolicyContent from './ResearchPolicyContent';
import ResearchAtPes from './ResearchAtPes';
import CRP from './CRP';
import Guidelines from './Guidelines';

const Grant = () => {
    const [selectedMainTab, setSelectedMainTab] = useState(null);  // Initially set to null to show no content
    const [selectedInternalTab, setSelectedInternalTab] = useState(0);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [professorDetail,setProfessorDetail]=useState({});
    const [showPdf, setShowPdf] = useState(false);  // For internal funding form PDF display
    const [staticDocuments, setStaticDocuments] = useState([]); // New state to store static documents

    const handleMainTabChange = (event, newValue) => {
        setSelectedMainTab(newValue);  // Show content when a tab is clicked
    };

  const handleInternalTabChange = (event, newValue) => {
    setSelectedInternalTab(newValue);
  };

    const handleDownload = () => {
        const fileUrl = '/IRF_2024_Proposal_Application_Form.docx';
        saveAs(fileUrl, 'IRF_2024_Proposal_Application_Form.docx');
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedFile(url);
            setShowPdf(true);
            console.log("Uploaded file URL:", url);  // Log the URL
        }
    };

    const pdfUrl = '/PAF.pdf';

    // Handle adding static documents
    const handleAddStaticDocument = (event) => {
        const file = event.target.files[0];
        if (file) {
            setStaticDocuments((prevDocuments) => [...prevDocuments, file]);
        }
    };

    const handleStaticDocumentDownload = (file) => {
        saveAs(file, file.name);
    };

    useEffect(() => {
        const fetchDesignation = async () => {
          try {
            const Response = await fetch(`http://10.2.80.90:8081/api/v1/auth/verifyToken`,{
                credentials:"include",
            });
            if (!Response.ok) {
              throw new Error(`HTTP error! status: ${Response.status}`);
            }
            const professorData = await Response.json();
            console.log(professorData.user)
            setProfessorDetail(professorData.user);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchDesignation();
      }, []);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url(/img/pixelcut-export.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}
        >
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Content layout */}
            <div className="flex">
                {/* Sidebar */}
                <Box
                    sx={{
                        width: '300px',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with translucency
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                        minHeight: '100vh',
                        position: 'relative',
                    }}
                >
                    <Typography variant="h5" sx={{ marginBottom: '20px', fontFamily: 'Times New Roman, Times, serif', textAlign: 'center' }}>
                        Research
                    </Typography>

                    {/* Main Tabs: Internal and External Funding */}
                    <Tabs
                        value={selectedMainTab}
                        onChange={handleMainTabChange}
                        orientation="vertical"
                        sx={{ width: '100%' }}
                    >
                        <Tab
                            label="Internal Funding"
                            sx={{ color: 'black', textAlign: 'left', textTransform: 'none', fontFamily: 'Times New Roman, Times, serif', fontSize: '20px' }}
                        />
                        <Tab
                            label="External Funding"
                            sx={{ color: 'black', textAlign: 'left', textTransform: 'none', fontFamily: 'Times New Roman, Times, serif', fontSize: '20px' }}
                        />
                    </Tabs>

                    {/* Add Static Document */}
                    {professorDetail && professorDetail.designation=="HOD" && <Box sx={{ marginTop: '20px' }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px' }}></Typography>
                        <label htmlFor="static-file-upload" style={{ cursor: 'pointer' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                startIcon={<FileUploadIcon />}
                            >
                                Add Document
                            </Button>
                        </label>
                        <input
                            id="static-file-upload"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleAddStaticDocument}
                        />


                        {staticDocuments.length > 0 && (
                            <Box sx={{ marginTop: '20px', textAlign: 'left' }}>
                                <Typography variant="subtitle1">Available Documents:</Typography>
                                <ul>
                                    {staticDocuments.map((doc, index) => (
                                        <li key={index}>
                                            <Typography variant="body1" sx={{ display: 'inline-block', marginRight: '10px' }}>
                                                {doc.name}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                startIcon={<DownloadIcon />}
                                                onClick={() => handleStaticDocumentDownload(doc)}
                                            >
                                                Download
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        )}
                    </Box>} 
                </Box>

                {/* Content display: Only show after a tab is clicked */}
                <Box sx={{ flexGrow: 1, padding: '20px', minHeight: '100vh' }}>
                    {/* Internal Funding Content */}
                    {selectedMainTab === 0 && (
                        <Box
                            sx={{
                                display: 'flex',
                                backgroundColor: 'white', // White background for internal funding content
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '20px',
                            }}
                        >
                            {/* Internal Funding Tabs */}
                            <Tabs
                                value={selectedInternalTab}
                                onChange={handleInternalTabChange}
                                orientation="vertical"
                                sx={{
                                    borderRight: 1,
                                    borderColor: 'divider',
                                    minWidth: '200px',
                                    marginRight: '20px',
                                }}
                            >
                                <Tab label="Research Policy" sx={{ textAlign: 'left', textTransform: 'none' }} />
                                <Tab label="Research at PES University" sx={{ textAlign: 'left', textTransform: 'none' }} />
                                <Tab label="CoE Research Project Grants (CRP)" sx={{ textAlign: 'left', textTransform: 'none' }} />
                                <Tab label="Guidelines (CFP)" sx={{ textAlign: 'left', textTransform: 'none' }} />
                                <Tab label="Internal Funding Form" sx={{ textAlign: 'left', textTransform: 'none' }} />
                            </Tabs>

                            {/* Internal Funding Tab Content */}
                            <Box sx={{ flexGrow: 1 }}>
                                {selectedInternalTab === 0 && <ResearchPolicyContent />}
                                {selectedInternalTab === 1 && <ResearchAtPes />}
                                {selectedInternalTab === 2 && <CRP />}
                                {selectedInternalTab === 3 && <Guidelines />}
                                {selectedInternalTab === 4 && (
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="h6">Internal Funding Form</Typography>
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 2 }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                startIcon={<DownloadIcon />}
                                                onClick={handleDownload}
                                            >
                                                Download Form
                                            </Button>
                                            <input
                                                accept=".pdf,.doc,.docx"
                                                id="upload-file"
                                                type="file"
                                                style={{ display: 'none' }}
                                                onChange={handleFileUpload}
                                            />
                                            <label htmlFor="upload-file">
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    startIcon={<FileUploadIcon />}
                                                >
                                                    Upload Form
                                                </Button>
                                            </label>
                                        </Box>
                                        {showPdf || (
                                            <Box sx={{ mt: 3, p: 2, backgroundColor: 'white', borderRadius: 5 }}>
                                                <iframe
                                                    src={pdfUrl}
                                                    width="100%"
                                                    height="600px"
                                                    title="PDF Viewer"
                                                    style={{ border: 'none' }}
                                                ></iframe>
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    )}

                    {/* External Funding Content */}
                    {selectedMainTab === 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background for external funding content
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '20px',
                            }}
                        >
                            <Typography variant="h5" marginTop={'-20px'} textAlign={'Centre'} gutterBottom>
                                External Funding Resources
                            </Typography>
                            <Box sx={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ border: '0px solid #ddd', padding: '8px' }}>Organization</th>
                                            <th style={{ border: '0px solid #ddd', padding: '8px' }}>Website</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px', fontFamily:'Arial Black'   }}>Defence Research and Development Organisation (DRDO)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="https://www.drdo.gov.in" target="_blank" rel="noopener noreferrer">DRDO Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}>Indian Space Research Organisation (ISRO)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}><a href="https://www.isro.gov.in" target="_blank" rel="noopener noreferrer">ISRO Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Council of Scientific and Industrial Research (CSIR)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="https://www.csir.res.in" target="_blank" rel="noopener noreferrer">CSIR Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Indian Council of Agricultural Research (ICAR)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}><a href="https://www.icar.org.in" target="_blank" rel="noopener noreferrer">ICAR Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}>Indian Council of Medical Research (ICMR)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="https://www.icmr.nic.in" target="_blank" rel="noopener noreferrer">MeitY Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Bhabha Atomic Research Centre (BARC)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="http://www.barc.gov.in" target="_blank" rel="noopener noreferrer">NABARD Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Indian Institute of Science (IISc)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}><a href="https://www.iisc.ac.in" target="_blank" rel="noopener noreferrer">NSF Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}>National Institute of Oceanography (NIO)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}><a href="http://www.nio.org" target="_blank" rel="noopener noreferrer">NIO Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px' ,fontFamily:'Arial Black'}}>Centre for Development of Advanced Computing (C-DAC)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer">C-DAC Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>National Aerospace Laboratories (NAL)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="http://www.nal.res.in" target="_blank" rel="noopener noreferrer">NAL Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Indian Institute of Tropical Meteorology (IITM)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="http://www.tropmet.res.in" target="_blank" rel="noopener noreferrer">IITM Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>National Institute of Immunology (NII)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="http://www.nii.res.in" target="_blank" rel="noopener noreferrer">NII Website</a></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}>Central Marine Fisheries Research Institute (CMFRI)</td>
                                            <td style={{ border: '2px solid #000000', padding: '8px',fontFamily:'Arial Black' }}><a href="(http://www.cmfri.org.in" target="_blank" rel="noopener noreferrer">CMFRI Website</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default Grant;