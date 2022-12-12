import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React, { Fragment } from 'react'
import Invoice from './Invoice'
import invoice from './data/dynamic_pdf_invoice_data'

import { ReactComponent as Logo } from "../images/log.svg"
import { Fab } from '@mui/material'
import { Download } from '@mui/icons-material'

const SvgIcon = ({ color1 }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="54.000000pt" height="56.000000pt" viewBox="0 0 54.000000 56.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,56.000000) scale(0.100000,-0.100000)"
            fill={color1} stroke="none">
            <path d="M39 553 c-9 -2 -21 -15 -27 -29 -10 -20 -8 -28 8 -44 11 -11 26 -20
33 -20 20 0 49 36 45 56 -4 21 -38 42 -59 37z"/>
            <path d="M203 497 c-139 -51 -206 -194 -159 -334 19 -54 36 -77 87 -116 50
-37 56 -34 20 12 -41 51 -51 81 -51 152 0 202 238 303 387 166 l46 -42 -21 42
c-53 103 -199 160 -309 120z"/>
            <path d="M413 360 c120 -141 -39 -339 -208 -258 -11 6 -33 24 -48 42 l-28 31
25 -52 c29 -59 89 -101 156 -110 105 -14 220 89 220 199 0 62 -52 142 -112
174 -42 22 -42 17 -5 -26z"/>
            <path d="M336 204 c-20 -19 -5 -54 24 -54 29 0 44 35 24 54 -19 20 -29 20 -48
0z"/>
        </g>
    </svg>


)

const SvgIconFull = ({ color1 }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="196.000000pt" height="81.000000pt" viewBox="0 0 196.000000 81.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,81.000000) scale(0.100000,-0.100000)"
            fill={color1} stroke="black">
            <path d="M119 673 c-9 -2 -21 -15 -27 -29 -10 -20 -8 -28 8 -44 11 -11 26 -20
33 -20 20 0 49 36 45 56 -4 21 -38 42 -59 37z"/>
            <path d="M283 617 c-139 -51 -206 -194 -159 -334 19 -54 36 -77 87 -116 50
-37 56 -34 20 12 -41 51 -51 81 -51 152 0 202 238 303 387 166 l46 -42 -21 42
c-53 103 -199 160 -309 120z"/>
            <path d="M1790 425 c0 -108 1 -115 20 -115 19 0 20 7 20 115 0 108 -1 115 -20
115 -19 0 -20 -7 -20 -115z"/>
            <path d="M493 480 c120 -141 -39 -339 -208 -258 -11 6 -33 24 -48 42 l-28 31
25 -52 c29 -59 89 -101 156 -110 105 -14 220 89 220 199 0 62 -52 142 -112
174 -42 22 -42 17 -5 -26z"/>
            <path d="M900 470 c-8 -5 -27 -6 -42 -3 l-28 6 0 -82 c0 -74 2 -81 20 -81 17
0 20 7 20 53 0 60 17 91 46 85 16 -3 19 -13 22 -71 3 -59 5 -67 22 -67 17 0
20 7 20 54 0 36 5 60 16 70 37 38 64 7 64 -73 0 -45 2 -51 21 -51 21 0 21 4
16 66 -7 92 -18 101 -117 92 -14 -1 -34 1 -45 5 -11 3 -27 2 -35 -3z"/>
            <path d="M1184 461 c-17 -11 -34 -30 -38 -44 -19 -75 69 -135 133 -91 29 21 9
37 -26 21 -16 -7 -30 -7 -48 1 -43 20 -28 32 40 32 57 0 65 2 65 19 0 33 -11
51 -41 66 -36 19 -48 19 -85 -4z m84 -38 c2 -9 -10 -13 -42 -13 -37 0 -44 3
-39 16 7 18 74 16 81 -3z"/>
            <path d="M1398 464 c-55 -29 -63 -81 -19 -125 34 -33 74 -38 110 -13 17 13 20
19 10 25 -7 4 -21 3 -32 -3 -24 -12 -63 -3 -71 17 -4 12 6 15 59 15 61 0 65 1
65 23 -1 29 -20 54 -54 67 -34 13 -35 12 -68 -6z m66 -20 c9 -3 16 -15 16 -25
0 -16 -8 -19 -45 -19 -30 0 -45 4 -45 13 0 30 37 45 74 31z"/>
            <path d="M1632 471 c-7 -4 -24 -6 -38 -3 l-24 4 0 -106 c0 -99 1 -106 20 -106
16 0 20 7 20 35 0 32 2 35 19 25 66 -35 134 39 105 115 -7 17 -54 45 -76 45
-7 0 -19 -4 -26 -9z m62 -37 c18 -18 20 -47 6 -75 -7 -13 -21 -19 -45 -19 -24
0 -38 6 -45 19 -23 45 -1 91 45 91 13 0 31 -7 39 -16z"/>
            <path d="M416 324 c-20 -19 -5 -54 24 -54 29 0 44 35 24 54 -8 9 -19 16 -24
16 -5 0 -16 -7 -24 -16z"/>
        </g>
    </svg>


)

const PdfReportLandingPage = () => {

    return (
        <div>
            {/* DOWNLOAD BUTTON */}
            <PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="Salaryslip.pdf">
                <Fab color="primary" aria-label="download">
                    <Download />
                </Fab>
            </PDFDownloadLink>

            {/* PDF PREVIEWER */}
            {/* <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={invoice} />
            </PDFViewer> */}

            {/* SVG */}
            {/* <Logo style={{ color: "red" }} /> */}

            <div style={{
                height: '200px',
                width: '500px'
            }} className="size">
                <SvgIcon color1={"purple"} />
            </div>
            <div style={{
                height: '200px',
                width: '500px'
            }} className="size">
                <SvgIconFull color1={"purple"} />
            </div>
        </div>


    )
}

export default PdfReportLandingPage