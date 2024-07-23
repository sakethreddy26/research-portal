import React, { useState } from 'react';
import Navbar from './Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import ResearchPolicyContent from './ResearchPolicyContent';
import ResearchAtPes from './ResearchAtPes';
import CRP from './CRP';
import Guidelines from './Guidelines';

// Replace with an alternative URL if necessary
const pdfWorkerUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

const Grant = () => {
    const [selectedMainTab, setSelectedMainTab] = useState(0);
    const [selectedInternalTab, setSelectedInternalTab] = useState(0);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [docError, setDocError] = useState(false);

    const handleMainTabChange = (event, newValue) => {
        setSelectedMainTab(newValue);
    };

    const handleInternalTabChange = (event, newValue) => {
        setSelectedInternalTab(newValue);
    };

    const handleDownload = () => {
        const fileUrl = '/IRF_2024_Proposal_Application_Form.docx'; // File is in the public directory
        saveAs(fileUrl, 'IRF_2024_Proposal_Application_Form.docx');
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedFile(url);
            console.log('Uploaded file:', file);
        }
    };

    const pdfUrl = uploadedFile || '/PAF.pdf'; // Use PDF for viewing
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <Navbar />
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Tabs value={selectedMainTab} onChange={handleMainTabChange} centered>
                    <Tab label="Internal Funding" />
                    <Tab label="External Funding" />
                </Tabs>
                {selectedMainTab === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Tabs value={selectedInternalTab} onChange={handleInternalTabChange} variant="scrollable" scrollButtons="auto">
                            <Tab label="Research Policy" />
                            <Tab label="Research at PES University" />
                            <Tab label="CoE Research Project Grants (CRP)" />
                            <Tab label="Guidelines (CFP)" />
                            <Tab label="Internal Funding Form" />
                        </Tabs>
                        {selectedInternalTab === 0 && <ResearchPolicyContent />}
                        {selectedInternalTab === 1 && <ResearchAtPes />}
                        {selectedInternalTab === 2 && <CRP />}
                        {selectedInternalTab === 3 && <Guidelines />}
                        {selectedInternalTab === 4 && (
                            <Box sx={{ p: 3 }}>
                                <Typography></Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<DownloadIcon />}
                                    onClick={handleDownload}
                                >
                                    Download Form
                                </Button>
                                <input
                                    accept=".doc,.docx"
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
                                        sx={{ ml: 2 }}
                                    >
                                        Upload Form
                                    </Button>
                                </label>
                                <Box sx={{ mt: 3 }}>
                                    {docError ? (
                                        <Typography color="error">Failed to load document. Please try again later.</Typography>
                                    ) : (
                                        <Worker workerUrl={pdfWorkerUrl}>
                                            <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                                        </Worker>
                                    )}
                                </Box>
                            </Box>
                        )}
                    </Box>
                )}
                {selectedMainTab === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>External Funding Resources</Typography>
                        <Box sx={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Organization</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Defence Research and Development Organisation (DRDO)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.drdo.gov.in" target="_blank" rel="noopener noreferrer">DRDO Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indian Space Research Organisation (ISRO)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.isro.gov.in" target="_blank" rel="noopener noreferrer">ISRO Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Council of Scientific and Industrial Research (CSIR)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.csir.res.in" target="_blank" rel="noopener noreferrer">CSIR Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indian Council of Agricultural Research (ICAR)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.icar.org.in" target="_blank" rel="noopener noreferrer">ICAR Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indian Council of Medical Research (ICMR)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.icmr.nic.in" target="_blank" rel="noopener noreferrer">ICMR Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bhabha Atomic Research Centre (BARC)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="http://www.barc.gov.in" target="_blank" rel="noopener noreferrer">BARC Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indian Institute of Science (IISc)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.iisc.ac.in" target="_blank" rel="noopener noreferrer">IISc Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>National Institute of Oceanography (NIO)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="http://www.nio.org" target="_blank" rel="noopener noreferrer">NIO Website</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Centre for Development of Advanced Computing (C-DAC)</td>
                                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer">C-DAC Website</a></td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default Grant;
