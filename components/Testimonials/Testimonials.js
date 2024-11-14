import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Pagination,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const testimonials = [
  {
    title: 'Burberryx',
    location: 'Nuts',
    content: ` got picked up in a rolls royce, felt horny so the driver got out the vehicle and shoved the rolls Royce umbrella inside my ass, felt fire. Prices are justified the experience was out of this world

    Paid £2000 for 5 hours expensive but worth`,
  },
  {
    title: 'Pamal',
    location: 'Anal',
    content: `Got picked up in a GLC Coupe by a handsome fellow named Pamal. Went above and beyond to make me feel welcomed and even ate me out in the back seat to put my mind at ease. 12/10 service`,
  },
  {
    title: 'Logistics',
    location: 'London',
    content: `The team at Hunter Express have consistently provided top-notch logistics solutions for our business. 
              Their attention to detail and customer support has been exemplary.`,
  },
  {
    title: 'Retail',
    location: 'Birmingham',
    content: `Hunter Express has played a vital role in ensuring our supply chain runs smoothly. 
              Their reliable service and communication have been invaluable to our operations.`,
  },
];

const Testimonials = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedTestimonials = testimonials.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    // <Container
    //   style={{
    //     textAlign: 'center',
    //     marginTop: '20px',
    //     height: '100vh',
    //     backgroundColor: '#faf6f0',
    //     width: '100vw', // Takes the full viewport width
    //     maxWidth: 'none', // Remove any max-width constraint
    //     display: 'flex',
    //     flexDirection: 'column', // Stack content vertically
    //     alignItems: 'center', // Center all content horizontally
    //     // justifyContent: 'space-between', // Space out content vertically
    //     padding: '10px 0',
    //   }}
    // >
    //   {/* TESTIMONIALS Heading */}
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center', // Centers content horizontally
    //       alignItems: 'center', // Centers content vertically
    //       backgroundColor: '',
    //       width: '100%',
    //       marginBottom: '100px',
    //       marginTop: '50px',
    //     }}
    //   >
    //     <Typography variant="h4" component="h2" gutterBottom>
    //       TESTIMONIALS
    //     </Typography>
    //   </Box>

    //   {/* Testimonial Cards Container */}
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center', // Center cards horizontally
    //       alignItems: 'center',
    //       gap: 10, // Space between cards
    //       flexWrap: 'wrap', // Allow wrapping on smaller screens
    //       width: '100%', // Full width of the container
    //       maxWidth: '1200px', // Limit maximum width for better appearance
    //     }}
    //   >
    //     {displayedTestimonials.map((testimonial, index) => (
    //       <Card
    //         sx={{
    //           width: '450px',
    //           height: '400px',
    //           display: 'flex', // Makes the card flexible
    //           flexDirection: 'column', // Stacks the content vertically
    //           justifyContent: 'center', // Centers the content vertically
    //           alignItems: 'center', // Centers the content horizontally
    //           borderRadius: '15px',
    //         }}
    //       >
    //         <CardContent>
    //           <Typography
    //             variant="h6"
    //             style={{ fontWeight: 'bold', marginBottom: '10px' }}
    //           >
    //             {testimonial.title}
    //           </Typography>
    //           <Typography
    //             variant="subtitle1"
    //             color="textSecondary"
    //             gutterBottom
    //           >
    //             {testimonial.location.toUpperCase()}
    //           </Typography>
    //           <Typography
    //             sx={{
    //               mt: 3,
    //               cursor: 'pointer',
    //               fontSize: '16px',
    //               color: '#6F7E8C',
    //               fontStyle: 'italic',
    //             }}
    //           >
    //             {testimonial.content}
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </Box>

    //   {/* Pagination Component */}
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center', // Centers pagination horizontally
    //       marginTop: '80px',
    //     }}
    //   >
    //     <Pagination
    //       count={totalPages}
    //       page={page}
    //       onChange={handleChange}
    //       variant="outlined"
    //       shape="rounded"
    //       siblingCount={0} // This hides the page numbers
    //       boundaryCount={0} // This hides the first and last page numbers
    //     />
    //   </Box>
    // </Container>
    <Container
      style={{
        textAlign: 'center',
        marginTop: '20px',
        height: '100vh',
        backgroundColor: '#faf6f0',
        width: '100%', // Use 100% instead of 100vw
        maxWidth: '100%', // Ensure no overflow due to max-width
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        alignItems: 'center', // Center all content horizontally
        overflowX: 'hidden', // Hide any accidental horizontal overflow
        padding: '10px 0',
      }}
    >
      {/* TESTIMONIALS Heading */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centers content horizontally
          alignItems: 'center', // Centers content vertically
          width: '100%',
          marginBottom: '100px',
          marginTop: '50px',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          TESTIMONIALS
        </Typography>
      </Box>

      {/* Testimonial Cards Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center cards horizontally
          alignItems: 'center',
          gap: 15, // Reduce gap size to prevent overflow
          flexWrap: 'wrap', // Allow wrapping on smaller screens
          width: '100%', // Full width of the container
          maxWidth: '1200px', // Limit maximum width for better appearance
          padding: '0 20px', // Padding to ensure content doesn't hit edges
          boxSizing: 'border-box', // Include padding in width calculations
        }}
      >
        {displayedTestimonials.map((testimonial, index) => (
          <Card
            key={index} // Don't forget the key!
            sx={{
              width: '450px',
              height: '400px',
              display: 'flex', // Makes the card flexible
              flexDirection: 'column', // Stacks the content vertically
              justifyContent: 'center', // Centers the content vertically
              alignItems: 'center', // Centers the content horizontally
              borderRadius: '15px',
              margin: '10px', // Margin for spacing without causing overflow
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                style={{ fontWeight: 'bold', marginBottom: '10px' }}
              >
                {testimonial.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {testimonial.location.toUpperCase()}
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#6F7E8C',
                  fontStyle: 'italic',
                }}
              >
                {testimonial.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination Component */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centers pagination horizontally
          marginTop: '80px',
        }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          siblingCount={0} // This hides the page numbers
          boundaryCount={0} // This hides the first and last page numbers
        />
      </Box>
    </Container>
  );
};

export default Testimonials;
