import React from 'react'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Box, Card, CardContent, Divider, Fab, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Navigation } from '@mui/icons-material';

const PdfExporting = () => {

    const useStyles = makeStyles((theme) =>
        createStyles({
            paper: {
                boxShadow: "0px 3px 3px -2px #cbc3c3, 0px 3px 4px 0px rgb(242 242 242), 0px 1px 8px 0px rgb(242 242 242)",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "10px"
            },
            TableHeader: {
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "10px",
                paddingBottom: "5px"
            },
            TableData: {
                border: "none",
                // fontSize: "0.75rem",
                padding: "7px"
            }
        }),
    );
    const classes = useStyles();
    const inputData = {
        employee_no: "EMP001",
        employee_name: "Yesu Doss",
        location: "Yelagiri Hills",
        unit_code: "2b Python",
        designation: "Developer",
        grade: "B",
        bank: "State Bank of India",
        bank_account: "7845124152",
        attendance: "28/31",
        doj: "04 Jan 2021",
        dob: "11 Dec 1999",
        gender: "Male",
        pan: "AAGPX4545J",
        pf_no: "33532",
        uan: 478451242521,
        eps: "-",
        esi: "AADH73",
        lop_days: 1,
    }

    const payrollData = [
        { earnings: "Basic", monthlyRate: "1", currentMonth: "2", arrear: "100", total: "100", deductions: "10", totalAmount: "1000" },
        { earnings: "House Rental Allowance", monthlyRate: "1", currentMonth: "1", arrear: "0", total: "0", deductions: "0", totalAmount: "" },
        { earnings: "Conveyance Allowance", monthlyRate: "1", currentMonth: "1", arrear: "0", total: "0", deductions: "0", totalAmount: "" },
        { earnings: "Medical Allowance", monthlyRate: "1", currentMonth: "1", arrear: "0", total: "0", deductions: "0", totalAmount: "" },
        { earnings: "Other Allowance", monthlyRate: "1", currentMonth: "1", arrear: "0", total: "0", deductions: "0", totalAmount: "" },
    ]
    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };

    return (
        <div style={{ minHeight: "67vh" }}>
            <Fab variant="extended" size="small" color="primary" sx={{ position: 'absolute', top: 160, right: 16, }} aria-label="add">
                <Navigation sx={{ mr: 1 }} />
            </Fab>
            <button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </button>

            <div>I will not be in the PDF.</div>
            <div ref={printRef}>
                <Card className={classes.paper}>
                    <CardContent>
                        <Box paddingBottom={"10px"}>
                            <Typography variant="h6">Payslip</Typography>
                        </Box>
                        <Divider />
                        <Grid paddingTop={"10px"} paddingBottom={"10px"} container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item md={4}>
                                <TableContainer>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}><Typography sx={{ paddingRight: "10px" }} fontWeight={600} fontSize={"0.9rem"} variant='body2'>Employee ID</Typography></TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.employee_no}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Employee Name </TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.employee_name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Location</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.location}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Unit Code</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.unit_code}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Designation</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.designation}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Grade</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.grade}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Bank Name</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.bank}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Bank Account</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.bank_account}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Attendance</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.attendance}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item md={4} >
                                <TableContainer>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Date of Joining</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.doj}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Date of Birth</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.dob}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>Gender</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.gender}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>PAN</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.pan}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>PF No.</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.pf_no}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>UAN</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.uan}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>EPS</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.eps}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>ESI</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.esi}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>LoP Days</TableCell>
                                                <TableCell sx={{ border: "none", padding: "0px" }}>{inputData?.lop_days}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                        {/* <Divider /> */}
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.TableHeader}>EARNINGS</TableCell>
                                        <TableCell className={classes.TableHeader}>MONTHLY RATE</TableCell>
                                        <TableCell className={classes.TableHeader}>CURRENT MONTH</TableCell>
                                        <TableCell className={classes.TableHeader}>ARREAR</TableCell>
                                        <TableCell className={classes.TableHeader}>TOTAL</TableCell>
                                        <TableCell className={classes.TableHeader}>DEDUCTIONS</TableCell>
                                        <TableCell className={classes.TableHeader}>TOTAL</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        payrollData.map((payroll, index) => {
                                            return (
                                                <TableRow>
                                                    <TableCell className={classes.TableData}>{payroll?.earnings}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.monthlyRate}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.currentMonth}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.arrear}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.total}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.deductions}</TableCell>
                                                    <TableCell className={classes.TableData}>{payroll?.totalAmount}</TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Divider />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default PdfExporting