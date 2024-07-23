import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ResearchAtPes = () => {
    return (
        <Box sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
                Research at PES University
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Scheme for Initiating Research (IR):</strong>
                A faculty member with PhD (newly recruited or initiating research activity) in a niche area at PESU.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Aim:</strong>
                <ul>
                    <li>Enable the beginning of research and related activities for a newly recruited faculty member or who has significant potential to attract external funding.</li>
                    <li>To attract high quality faculty in the present scenario.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Grants:</strong>
                Grant of Rs. 2 Lakhs shall be awarded based on the merit of the idea. The amount should be spent within 24 months after granted. (Based on requirement and progress an additional amount of Rs. 1 Lakh may be considered after an year.)
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Criteria:</strong>
                <ul>
                    <li>New faculty member appointed with Ph.D or faculty member starting research in a niche area.</li>
                    <li>The faculty should commit to do research and to seek external funding for R & D projects.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Procedure:</strong>
                Faculty members should apply for IR grant, to his/her Head of the Department, providing details of the research to be carried out in the prescribed form. Total budget should not exceed the prescribed limit.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Constituents:</strong>
                <ul>
                    <li>Research plan should describe research that is sustainable and has potential to help community.</li>
                    <li>Itemized budget should be consistent with research plan.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Evaluation Process:</strong>
                The application/proposal will be reviewed by a Research Committee appointed by Vice Chancellor and headed by Dean of Research. On recommendation of the committee, VC will consider, approve and sanction the fund. Dean of Research will play a key role in monitoring the expenditure of funds.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Expenditure:</strong>
                <ul>
                    <li>The grant can be used to purchase research equipment like software, databases, storage, network equipment and laboratory supplies. But purchasing Desktops, Laptops, printers and peripherals are not allowed. The grant also can not be used for hiring external consultancy or assistance.</li>
                    <li>Record of purchase will be maintained by the respective department and sent to Dean Research office whenever required.</li>
                    <li>All purchases/expenses should be processed in accordance with PESU policies and procedures.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Expected Outcomes:</strong>
                The faculty member is expected to seek external mural funding by the end of this grant and also is expected to enhance the teaching performance. The report submitted as part of this grant will also be used for faculty appraisal.
            </Typography>
        </Box>
    );
};

export default ResearchAtPes;
