import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import bathukamma from "../../assets/bathukamma.jpg";
import Ugadhi from '../../assets/ugadhi.png'
import { useLocation, useNavigate } from "react-router-dom";
const Events = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const pathname = location.pathname;
  const eventdata = [
    {
      id: 1,
      img: bathukamma,
      name: "TAM'S Womens Day",
      date: "Saturday , 04/19/2025",
    },
    {
      id: 2,
      img: Ugadhi,
      name: "TAM Ugadi & SriRama Navami Celebrations",
      date: "Sunday , 09/28/2025",
    },
    {
      id: 3,
      img: bathukamma,
      name: "TAM Telugu Calendar 2025",
      date: "Sunday , 09/28/2025",
    },
    
  ];
  return (
    <Box width="100%">
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ fontSize: 15, fontWeight: 600, mb: 1, color: "#3DB80C" }}
        >
          {pathname==="/events/upcoming"?"Upcoming Events":"Past Events"}
        </Typography>

        {eventdata.map((event) => (
          <Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Card
                variant="outlined"
                sx={{ display: "flex", gap: 3, background: "transparent" }}
              >
                <CardMedia
                  component="image"
                  image={event.img}
                  sx={{ width: "150px", height: "200px" }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ position: "relative" }}
                >
                  <CardContent>
                    <Typography
                      color="#3DB80C"
                      variant="h6"
                      sx={{ fontSize: 15, fontWeight: 600, mb: 1 }}
                    >
                      TAM'S Womens Day
                    </Typography>
                    <Typography sx={{ fontSize: 15, fontWeight: 600, mb: 1 }}>
                      Saturday , 04/19/2025
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ position: "absolute", bottom: 0 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#3DB80C",
                        color: "white",
                        border: "none",
                        whiteSpace: "normal",
                      }}
                      onClick={()=>navigate('/eventdetails')}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Box>

            <Divider sx={{ border: "1px solid #3DB80C", mt: 3 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Events;
