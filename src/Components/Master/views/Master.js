import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Base from '../../Base/views/Base';
import EmpBas from './EmpBas';
import ReactPDF from '@react-pdf/renderer';
import MemberReport from './MemberReport';
import { Button } from '@mui/material';

export default function Master() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const download = () => {
        ReactPDF.renderToStream(<MemberReport />);
    }
    return (
        <Base>
            <Box sx={{ width: '100%', typography: 'body1', minHeight: "87vh" }}>
                <TabContext value={value}>
                    <Box>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Diocese" value="1" sx={{ textTransform: "none" }} />
                            <Tab label="Vicariate" value="2" sx={{ textTransform: "none" }} />
                            <Tab label="Parish" value="3" sx={{ textTransform: "none" }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <EmpBas />
                    </TabPanel>
                    <TabPanel value="2">
                        <div>
                            Vicariate
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <Button variant='contained' onClick={download}>download</Button>
                        <MemberReport />
                    </TabPanel>
                </TabContext>
            </Box>
        </Base>
    );
}
