import Base from "../../Base/views/Base"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridWeek from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import "../css/styles.css"
import { Button, IconButton, lighten, Paper, Tooltip, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import { createRef, useState } from "react"
import MuiToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'

const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
    margin: theme.spacing(1),
    border: 'none !important',
    padding: "7px",
    '&:not(:first-of-type)': {
        borderRadius: `${theme.shape.borderRadius}px !important`
    },
    '&:first-of-type': {
        borderRadius: `${theme.shape.borderRadius}px !important`
    }
}))

function Users() {
    const calendarRef = createRef()
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
    function renderEventContent(eventInfo) {
        var event = eventInfo.event;
        var customHtml = '';
        var desc = event.extendedProps.desc ? event.extendedProps.desc : ''
        customHtml += "<span class='r10 font-xxs font-bold' style='overflow: hidden;'>" + event.title + "</span>";
        customHtml += " &nbsp;<span class='r10 highlighted-badge font-xxs font-bold'>" + desc + "</span>";
        return { html: customHtml }
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    const handleToday = () => {
        let calendarApi = calendarRef.current.getApi()
        setTitle(calendarApi?.currentDataManager?.data?.viewTitle)
        calendarApi.today()
    }
    const handleNext = () => {
        let calendarApi = calendarRef.current.getApi()
        setTitle(calendarApi?.currentDataManager?.data?.viewTitle)
        calendarApi.next()
    }
    const handlePrevious = (event, newAlignment) => {
        let calendarApi = calendarRef.current.getApi()
        setTitle(calendarApi?.currentDataManager?.data?.viewTitle)
        calendarApi.prev()
    }

    const handleViewTypeChange = (viewType) => {
        let calendarApi = calendarRef.current.getApi()
        setTitle(calendarApi?.currentDataManager?.data?.viewTitle)
        calendarApi.changeView(viewType)
    }


    const [alignment, setAlignment] = useState('left')
    const [title, setTitle] = useState('Calendar')
    return (
        <Base>

            <Paper sx={{ borderRadius: "16px", maxWidth: "1500px", minWidth: "1500px" }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px",
                }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment} aria-label='text alignment'>
                            <ToggleButton onClick={() => handleViewTypeChange('dayGridMonth')} value='dayGridMonth' aria-label='Month'>
                                <Tooltip title="Month">
                                    <ViewModuleIcon fontSize="small" />
                                </Tooltip>
                            </ToggleButton>
                            <ToggleButton onClick={() => handleViewTypeChange('timeGridWeek')} value='timeGridWeek' aria-label='Week'>
                                <Tooltip title="Week">
                                    <ViewWeekIcon fontSize="small" />
                                </Tooltip>
                            </ToggleButton>
                            <ToggleButton onClick={() => handleViewTypeChange('timeGridDay')} value='timeGridDay' aria-label='Day'>
                                <Tooltip title="Day">
                                    <ViewDayIcon fontSize="small" />
                                </Tooltip>
                            </ToggleButton>
                            <ToggleButton onClick={() => handleViewTypeChange('listWeek')} value='listWeek' aria-label='List Week'>
                                <Tooltip title="Agenda">
                                    <ViewStreamIcon fontSize="small" />
                                </Tooltip>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <IconButton onClick={handlePrevious}>
                            <ArrowBackIosNewIcon sx={{ width: "0.7em", height: "0.75em" }} />
                        </IconButton>
                        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "1.2rem", margin: "0px 16px 0px 16px" }}>{title}</Typography>
                        <IconButton onClick={handleNext} >
                            <ArrowForwardIosIcon sx={{ width: "0.7em", height: "0.75em" }} />
                        </IconButton>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Button onClick={handleToday} sx={{ fontWeight: 700, borderRadius: "8px", fontSize: "13px", height: "30px", padding: "4px 10px", boxShadow: "none", lineHeight: 1.71429 }} size="small" variant="contained" color="error">Today</Button>
                    </div>
                </div>
                <FullCalendar
                    headerToolbar={false}
                    eventContent={renderEventContent}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridWeek, listPlugin]}
                    initialView="dayGridMonth"
                    contentHeight={600}
                    events={[
                        { title: 'event 1', start: '2022-12-01', color: lighten("#1890ff", 0.85), textColor: "#1890ff", desc: "Event", borderColor: "#1890ff" },
                        { title: 'event 2', start: '2022-12-02', color: lighten("#7a0c2e", 0.85), textColor: "#7a0c2e", desc: "Event", borderColor: "#7a0c2e" },
                        { title: 'event 3', start: '2022-12-11', color: lighten("#00ab55", 0.85), textColor: "#00ab55", desc: "Event", borderColor: "#00ab55" },
                        { title: 'event 4', start: '2022-12-12', color: lighten("#04297a", 0.85), textColor: "#04297a", desc: "Event", borderColor: "#04297a" },
                        { title: 'event 5', start: '2022-12-12', color: lighten("#ffc107", 0.85), textColor: "#ffc107", desc: "Event", borderColor: "#ffc107" },
                        { title: 'event 6', start: '2022-12-12', color: lighten("#ff4842", 0.85), textColor: "#ff4842", borderColor: "#ff4842" },
                        { title: 'event 6', start: '2022-12-12', color: lighten("#ff4842", 0.85), textColor: "#ff4842", borderColor: "#ff4842" },
                        { title: 'event 6', start: '2022-12-22', color: lighten("#ff4842", 0.85), textColor: "#ff4842", borderColor: "#ff4842" },
                        { title: 'event 6', start: '2022-12-23', color: lighten("#ff4842", 0.85), textColor: "#ff4842", borderColor: "#ff4842" },
                        { title: 'event 6', start: '2022-12-21', end: "2022-12-29", color: lighten("#1890ff", 0.85), textColor: "#1890ff", borderColor: "#1890ff" },
                    ]}
                    dayMaxEvents={2}
                    dateClick={handleDateClick}
                    droppable={true}
                    editable={true}
                    eventClick={(info) => {
                        alert(JSON.stringify(info?.el?.fcSeg?.eventRange?.def))
                    }
                    }
                    eventDrop={(info) => {
                        alert(info.event.title + " was dropped on " + info.event.start.toISOString() + JSON.stringify(info?.el?.fcSeg?.eventRange?.def));
                    }}
                    ref={calendarRef}
                />
            </Paper>
        </Base>
    )
}

export default Users