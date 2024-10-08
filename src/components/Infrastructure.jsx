import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import Navbar from "./Navbar";
import SampleImage from "../assets/main-hero.png";
import Footer from "./Footer";

const Infrastructure = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <Typography variant="h4" sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                    paddingLeft: "10%"
                }}>
                    Our Infrastructure
                </Typography>
            </Box>

            {/* Parent container for the two-column layout */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '20px',
                width: '85%',  
                margin: 'auto'
            }}>

                {/* Left side: Main content */}
                <Box sx={{
                    flex: '3',
                    marginRight: '30px',
                    maxWidth: '50%'  
                }}>

                    <Box component="img" src={SampleImage} alt="Printing Products" sx={{ width: '40%%', maxHeight: '50%', objectFit: 'contain', marginBottom: '20px' }} />
                    <Box component="img" src={SampleImage} alt="Printing Products" sx={{ width: '40%%', maxHeight: '50%', objectFit: 'contain', marginBottom: '20px' }} />


                </Box>

                <Box sx={{
                    flex: '1',
                    minWidth: '300px',
                    maxWidth: '800px',
                    flexShrink: 0
                }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: '60px', marginTop: "20px" }}>
                        Over the years, the printing industry has grown in all parts of the globe and India is no exception. Printing industry in India has developed into a highly competitive field. The increasing use of Internet has brought a revolution in the Printing Industry. To keep pace with these emerging technologies, one needs to invest consistently in the latest technologies and equipments. Our 65,000 sq. ft. manufacturing facility is equipped with state-of-the-art-equipments. Our plant has web-fed, sheet-fed and Digital print machines combined with adequate pre-press and post-press operations. Whether it's software upgrade, pre-press, the latest press technology, or finishing, our aim is to be at the forefront of our industry.
                    </Typography>
                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR PRESS
                        </Typography>
                    </Paper>
                    <Typography variant="body1">
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" , marginBottom: "50px"}}>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </Typography>


                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR PRE PRESS
                        </Typography>
                    </Paper>
                    <Typography variant="body1">
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "50px"}}>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </Typography>


                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR POST PRESS
                        </Typography>
                    </Paper>

                    
                    <Typography variant="body1">
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "50px"}}>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Infrastructure;
