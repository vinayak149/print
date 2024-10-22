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
                    marginTop:"20px",
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
                    <Typography variant="body1" sx={{ fontFamily: "Poppins", textAlign: 'justify', marginBottom: '60px', marginTop: "20px" }}>
                        Over the years, the printing industry has witnessed significant growth
                        worldwide, and India is no exception. The industry here has evolved into
                        a highly competitive and dynamic field. The rise of the Internet has
                        further revolutionized printing, making it essential to stay ahead by
                        continuously investing in cutting-edge technologies and equipment.
                        At Divine Print Solution, our 65,000 sq. ft. manufacturing facility is
                        equipped with state-of-the-art machinery, including web-fed, sheet-fed,
                        and digital print systems. With a comprehensive range of pre-press,
                        press, and post-press operations, we are well-prepared to meet the
                        diverse needs of our clients. Whether it’s upgrading our software,
                        adopting the latest in printing technology, or refining our finishing
                        processes, our goal is to remain at the forefront of the industry,
                        delivering unparalleled quality and efficiency.
                    </Typography>
                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR PRESS
                        </Typography>
                    </Paper>
                    <Typography variant="body1">
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "50px" }}>
                            <Typography>
                                At Divine Print Solution, we use the most advanced equipment to
                                ensure the highest quality and precision in every print.
                            </Typography>
                        </ul>
                    </Typography>


                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR PRE PRESS
                        </Typography>
                    </Paper>
                    <Typography variant="body1">
                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "50px" }}>
                            <li>Latest CTP Machines: Ensuring accurate and efficient plate production for
                                seamless print quality. </li>
                            <li>Sheet-fed Machines: Available in various sizes to handle diverse printing
                                requirements.</li>
                            <li>Web-fed Machines: Equipped with different cut-offs for high-volume,
                                continuous printing.</li>
                            <li>Digital Press: Ideal for short-run, quick-turnaround jobs with vibrant, high-
                                definition output.</li>
                        </ul>
                    </Typography>


                    <Paper elevation={0} sx={{ bgcolor: '#FFD700', padding: '10px', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                            OUR POST PRESS
                        </Typography>
                    </Paper>


                    <Typography variant="body1">

                        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "50px" }}>
                            <p style={{marginBottom:"25px"}}>We offer a wide range of post-press services to give your products a
                                professional finish:</p>
                            <li>
                                Folding & Gathering Machines: For accurate folding and assembling of
                                printed materials.
                            </li>
                            <li>Saddle Stitching Machines: Perfect for binding booklets and brochures
                                efficiently.
                            </li>
                            <li>Perfect Binding Machines: For a sleek and durable finish to books and
                                catalogs.
                            </li>
                            <li>Section Sewing Machines: To ensure the strongest binding for high-quality
                                publications.</li>
                            <li>Cutting Machines: For precision cuts across a variety of materials.</li>
                            <li>Automatic Case Making Machines: Crafting sturdy, professional cases for
                                hard-bound books.</li>
                            <li>Lamination Machines: Offering protective and glossy finishes to printed
                                materials.</li>
                            <li>Foiling Machines: For elegant and eye-catching metallic finishes.</li>
                            <li>Gilding Machines: Adding a luxurious touch with decorative gold and silver
                                edges.</li>
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
