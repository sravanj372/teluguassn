import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import {
  Custombutton,
  Filterbutton,
} from "../../adminstyles/MembershiptableStyles";

import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import FilterListIcon from "@mui/icons-material/FilterList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import CircleIcon from "@mui/icons-material/Circle";
import Paginationcomponent from "./Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useNavigate } from "react-router-dom";

const Volunteermanagement = () => {
  const navigate = useNavigate();

  const tabledata = [
    {
      sno: 1,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
    {
      sno: 2,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
    {
      sno: 3,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
    {
      sno: 4,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
    {
      sno: 5,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
    {
      sno: 6,
      name: "Tanuja Abhilash",
      email: "tanuja@gmail.com",
      phone: "+18103303039",
      joineddate: "Mar15,2025",
      status: "Active",
      action: "",
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid size={{md:6,xs:12}}>
          <Typography variant="h5" color="#3DB80C">
            Volunteer Management
          </Typography>
        </Grid>
        <Grid size={{md:6,xs:12}}>
          <Box 
          sx={{display:"flex",gap:1,
          justifyContent:{md:'flex-end',sm:'flex-start'},
          flexWrap:'wrap'}}>
            <Button
              sx={{
                background: "#3DB80C",
                color: "white",
                borderColor: "#3DB80C",
                fontSize:13,
                fontWeight:400
              }}
              variant="outlined"
              onClick={() => navigate("/admin/membership")}
            >
              Membership Management
            </Button>
            <Button
              sx={{
                background: "#3DB80C",
                color: "white",
                borderColor: "#3DB80C",
                fontSize:13,
                fontWeight:400
              }}
              variant="outlined"
              onClick={() => navigate("/admin/sponsorship/subscriptionplans")}
            >
              Subscription plans
            </Button>
          </Box>
        </Grid>

        {/* search line */}
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 6 }}></Grid>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { lg: "flex-end" },
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              mt:1,
              
            }}
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("addvolunteer")}
              sx={{ background: "#3DB80C",fontWeight:400 }}
            >
              Add Volunteer
            </Button>

            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              sx={{ background: "#3DB80C",fontWeight:400}}
            >
              Bulk Upload
            </Button>

            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              sx={{ background: "#3DB80C",fontWeight:400 }}
            >
              Export
            </Button>

            <Box sx={{ position: "relative",fontWeight:400 }}>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                sx={{ borderColor: "#3DB80C", color: "#3DB80C" }}
              >
                Filters
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* table data */}
        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <TableContainer
            component={Paper}
            sx={{ marginTop: "10px", background: "white" }}
          >
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead
                sx={{
                  border: "2px solid #3DB80C",
                }}
              >
                <TableRow
                  sx={{
                    fontWeight: "bold",
                    "& .MuiTableCell-head": {
                      fontWeight: "bold",
                      color: "#3DB80C",
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableCell>S.No</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Joined Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map((data) => (
                  <TableRow key={data.sno}>
                    <TableCell>{data.sno}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.joineddate}</TableCell>
                    <TableCell sx={{ color: "#3DB80C" }}>
                    <Stack direction='row'>
                    {data.status && <CircleIcon sx={{ marginTop:'5px',marginRight:'2px',fontSize: "11px" }} />}
                    {data.status}
                    </Stack>
                    </TableCell>
                    <TableCell>
                    <Stack direction='row' gap={2}>
                    <IconButton sx={{flexDirection:'column'}}>
                     <EditIcon sx={{fontSize:'20px',color: '#3DB80C'}}/> 
                    <Typography sx={{fontSize:'11px' ,color: '#3DB80C',fontWeight:'550'}}>EDIT</Typography>
                    </IconButton>  
                    <IconButton sx={{flexDirection:'column'}}>
                    <DeleteOutlineIcon sx={{color: '#FF3326'}}/>
                    <Typography sx={{color: '#FF3326',fontSize:'11px'}}>Delete</Typography>
                    </IconButton>
                    </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Paginationcomponent />
    </Box>
  );
};

export default Volunteermanagement;
