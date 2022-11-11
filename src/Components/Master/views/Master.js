import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Base from '../../Base/views/Base';
import EmpBas from '../../Base/views/EmpBas';
import PdfExporting from './PdfExporting';
import MuiDataGrid from './MuiDataGrid';

export default function Master() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Base>
            <Box sx={{ width: '100%', typography: 'body1', minHeight: "87vh" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                        <MuiDataGrid />
                    </TabPanel>
                    <TabPanel value="3">
                        <PdfExporting />
                    </TabPanel>
                </TabContext>
            </Box>
        </Base>
    );
}
