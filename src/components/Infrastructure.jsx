import React from 'react';
import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import Navbar from './Navbar';
import logo from "../assets/main-logo.png";

const Infrastructure = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-4">
                <Typography variant="h4" className="text-gray-800" style={
                    {fontFamily: "Poppins", fontWeight: "500", marginBottom: "80px", marginLeft:"10.5%"}
                }> 
                    Our Infrastructure
                </Typography>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Machine"
                                image={logo}
                                className="h-60 object-cover"
                            />
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <Typography variant="h5" className="bg-yellow-400 px-4 py-2 font-semibold text-gray-800">
                                OUR PRESS
                            </Typography>
                            <Card className="shadow-md">
                                <CardContent>
                                    <Typography variant="body2" className="text-gray-600">
                                        ● Latest CTP Machines
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Typography variant="h5" className="bg-yellow-400 px-4 py-2 font-semibold text-gray-800">
                                OUR PRE PRESS
                            </Typography>
                            <Card className="shadow-md">
                                <CardContent>
                                    <Typography variant="body2" className="text-gray-600">
                                        ● Sheet-fed machines of various sizes
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600">
                                        ● Web-fed machines of various cut-offs
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600">
                                        ● Digital Press
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Infrastructure;
