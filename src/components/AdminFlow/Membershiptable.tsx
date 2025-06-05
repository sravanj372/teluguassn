import { Box, Button, Grid, Typography } from "@mui/material";
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
import EditIcon from "@mui/icons-material/Edit";;
import { useNavigate } from "react-router-dom";
import Paginationcomponent from "./Pagination";
import CircleIcon from "@mui/icons-material/Circle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import Filterdropdown from "./Filterdropdown";
const Membershiptable = () => {
  const navigate = useNavigate();

  const tabledata = [
    {
      sno: 1,
      name: "Tanuja Abhilash",
      email: "hwestiii@outlook.com",
      phone: "+18143008184",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
    {
      sno: 2,
      name: "Vignesh",
      email: "ianbuck@icloud.com",
      phone: "+14842634655",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
    {
      sno: 3,
      name: "Hema Chaudhari",
      email: "tkrotchko@yahoo.ca",
      phone: "+15852826353",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
    {
      sno: 4,
      name: "Ayush Dhyan",
      email: "mugwump@verizon.net",
      phone: "+16102448965",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
    {
      sno: 5,
      name: "Param N",
      email: "larry@verizon.net",
      phone: "+18143008346",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
    {
      sno: 6,
      name: "Pratyush Solanki",
      email: "oevans@icloud.com",
      phone: "+18143008346",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "active",
    },
  ];
  const [state, setState] = useState(false);
  function openFilter() {
    setState((prev) => !prev);
  }

  return (
    <Box gap={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Typography variant="h5" color="#3DB80C">
            Membership Management
          </Typography>
        </Grid>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box display="flex" justifyContent={{xs:'flex-start',md:'flex-end'}}
          gap={2} flexWrap="wrap">
            <Button
              sx={{background:'#3DB80C',color:'white',borderColor:'#3DB80C',fontWeight:400}}
             variant="outlined"
              onClick={() => navigate("volunteermgmt")}
            >
              Volunteer Management
            </Button>
            <Button
              sx={{background:'#3DB80C',color:'white',borderColor:'#3DB80C',fontWeight:400}} 
              variant="outlined"
              onClick={() => navigate("/admin/sponsorship/subscriptionplans")}
            >
              Subscription plans
            </Button>
          </Box>
        </Grid>

       {/*  <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} >
        <Search />
        </Grid> */}
        <Grid size={{ lg: 12, md: 12, sm: 12,xs:12 }} >
          <Box sx={{display:'flex',justifyContent:{lg:'flex-end'},flexDirection:'row',flexWrap:'wrap',gap:2}}>
          
          <Button variant="contained" 
           startIcon={<AddIcon />} 
           onClick={() => navigate("/admin/membership/addmember")}
           sx={{background:'#3DB80C',fontWeight:400}}>
          Add Member
         </Button>

        <Button variant="contained" startIcon={<UploadIcon />} sx={{background:'#3DB80C',fontWeight:400}}>
          Bulk Upload
        </Button>

        <Button variant="contained" startIcon={<UploadIcon />} sx={{background:'#3DB80C',fontWeight:400}}>
          Export
        </Button>

        <Box sx={{position:'relative'}} >
        <Button 
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={openFilter}
          sx={{borderColor:'#3DB80C',color:'#3DB80C',fontWeight:400}}
        >
          Filters
        </Button>
        {state && <Filterdropdown  />}
        </Box>
       </Box>

        </Grid>

        <TableContainer
          component={Paper}
          sx={{ marginTop: "10px", background: "white",fontWeight:400 }}
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
                <TableCell align="left">Membership Type</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabledata.map((data) => (
                <TableRow key={data.sno}>
                  <TableCell>{data.sno}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.membertype}</TableCell>
                  <TableCell>{data.date}</TableCell>

                  <TableCell sx={{ color: "#3DB80C" }}>
                    {data.status && <CircleIcon sx={{ fontSize: "11px" }} />}
                    {data.status}
                  </TableCell>
                  <TableCell>
                    <Select
                      value="Edit"
                      size="small"
                      renderValue={() => (
                        <Box display="flex" alignItems="center">
                          <EditIcon
                            fontSize="small"
                            style={{ marginRight: 4 }}
                          />
                          Edit
                        </Box>
                      )}
                    >
                      <MenuItem value="Delete">
                        <DeleteOutlineIcon
                          fontSize="small"
                          style={{ marginRight: 8, color: "red" }}
                        />
                        Delete
                      </MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* pagination */}
      </Grid>
      <Paginationcomponent />
    </Box>
  );
};

export default Membershiptable;
