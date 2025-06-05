import Head from 'next/head';
// @mui
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

SalesPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function SalesPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title>Sales Insights | STUDIO 360</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Sales Insights
        </Typography>

        <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary' }}>
          AI-powered sales forecasting and performance analytics for Kitsch Studio
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Sales Forecast
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Facebook Prophet AI predictions for next month's sales
                </Typography>
                <Box sx={{ mt: 2, p: 2, bgcolor: 'primary.lighter', borderRadius: 1 }}>
                  <Typography variant="h4" color="primary.main">
                    ₱45,230
                  </Typography>
                  <Typography variant="caption">
                    Predicted Revenue
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Performance Metrics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Current month vs predictions
                </Typography>
                <Box sx={{ mt: 2, p: 2, bgcolor: 'success.lighter', borderRadius: 1 }}>
                  <Typography variant="h4" color="success.main">
                    +12.5%
                  </Typography>
                  <Typography variant="caption">
                    Above Forecast
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Top Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Best performing items this month
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2">1. Custom Mugs - ₱8,450</Typography>
                  <Typography variant="body2">2. Art Prints - ₱6,230</Typography>
                  <Typography variant="body2">3. Stickers - ₱4,120</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Sales Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Comprehensive sales analytics powered by AI forecasting
                </Typography>
                <Box 
                  sx={{ 
                    height: 300, 
                    bgcolor: 'grey.100', 
                    borderRadius: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    📊 Sales Charts & Graphs Will Be Displayed Here
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
} 