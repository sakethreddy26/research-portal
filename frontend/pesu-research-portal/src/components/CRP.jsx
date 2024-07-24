import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CRP= () => {
    return (
        <Box sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
                Scheme for CoE Research Project Grants (CRP)
            </Typography>
            <Typography variant="body1" paragraph>
                This grant is to stimulate active collaborative research which promotes PESU to have a competitive edge in strategic areas of National and International importance.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Aim:</strong>
                <ul>
                    <li>To aid a long term project strategy in interdisciplinary emerging areas. The project(s) must have substantial goal of helping the centre to generate high quality publications / patents / innovative products.</li>
                    <li>To promote inter-faculty collaboration.</li>
                    <li>To help extend this work to be done by scholars, graduate and under graduate students.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Grants:</strong>
                Grants shall be awarded with a maximum value of Rs. 60 Lakhs.
                The duration of the Grant will be 3 years. It could be extended by another year after a complete review of the outcomes.
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Criteria:</strong>
                <ul>
                    <li>A group of faculty members of PESU with each member having PhD degree and proven track record of quality research.</li>
                    <li>Can seek collaborations from other reputed institutes or industry with whom proposal for extramural funding can be submitted during the grant period or at the end of the project, with duly drawn commitment and cost contributions.</li>
                    <li>The group may consist of PESU faculty members, PhD scholars, Master’s students and undergraduates belonging to PESU.</li>
                    <li>For this grant proposal the Principle Investigator(PI) and Co-investigators must be from PESU.</li>
                    <li>At any time, a PI can submit only one application. However, he/she can be a co-investigator in more than one proposal.</li>
                    <li>At the time of submission for this grant PI must not have a funded project or any other research grants from the university, in which he or she is a PI.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Application Process:</strong>
                <ul>
                    <li>The call for proposals may limit research funding to a few strategic areas.</li>
                    <li>Proposals are given to projects in inter-disciplinary areas with inter-disciplinary faculty members as PI and Co-PI</li>
                    <li>Short proposals have to be submitted for initial screening. Short listed applicants have to submit a full proposal in prescribed format.</li>
                    <li>The proposals will be reviewed by a selection committee. The PI will be invited to make a presentation before the selection committee.</li>
                    <li>Decision on the grant award will be announced.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Selection :</strong>
                <ul>
                    <li>Preference is given to innovative interdisciplinary research.</li>
                    <li>Team must consist of Inter-faculty members whose expertise is complimentary.</li>
                    <li>Proposals to generate IPs, good publications and/or innovative products and linked to high quality PhD program will get funds.</li>
                    <li>Selection committee will be constituted by VC with Dean of Research as head and members will be constituted from internal as well as external experts.</li>
                    <li>The proposal may have more than one project aligned to a theme and within the budget specified for the grant.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Outcomes:</strong>
                <ul>
                    <li>The PI will be responsible for the deliverables.</li>
                    <li>The funding will be on 3 years basis.</li>
                    <li>Six monthly progress report has to be submitted. PI is required to report outcomes at the end of one year for yearly evaluation before releasing the funds for next year.</li>
                    <li>Purchase of research equipment like servers, storage, network equipment, databases, software and laboratory equipment will be in accordance with PESU procurement policy.</li>
                    <li>Part of grant can be used as scholarship to PhD research scholars and part time work done by graduate and under graduate students.</li>
                    <li>Grant has to be utilized within the stipulated period.</li>
                    <li>Any new research communication, contribution of the institute funding should be duly acknowledged.</li>
                    <li>In case PI leaves the institute before the completion of project, one of the co-investigators from PESU will assume responsibility as PI.</li>
                </ul>
            </Typography>
            <Typography variant="body1" paragraph>
                <strong>Deliverables:</strong>
                Publications/IPRs/Innovative products or processes at the end of the grant period. IPs thus generated will be treated according to the university IPR policy.
            </Typography>
        </Box>
    );
};

export default CRP;
