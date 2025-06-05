import Head from 'next/head';
// @mui
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Button, 
  Stack,
  Chip
} from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

BookkeepingPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function BookkeepingPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title>AI Bookkeeping | STUDIO 360</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <div>
            <Typography variant="h3" component="h1" paragraph>
              AI-Driven Bookkeeping
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Automated financial tracking with OCR receipt processing and BIR-ready reports
            </Typography>
          </div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:upload-fill" />}>
              Upload Receipt
            </Button>
            <Button variant="outlined" startIcon={<Iconify icon="eva:download-fill" />}>
              Export Report
            </Button>
          </Stack>
        </Stack>

        <Grid container spacing={3}>
          {/* Financial Overview */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Iconify icon="eva:trending-up-fill" width={24} color="success.main" />
                  <Typography variant="h6">Total Income</Typography>
                </Stack>
                <Typography variant="h3" color="success.main">
                  ₱125,450
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Iconify icon="eva:trending-down-fill" width={24} color="error.main" />
                  <Typography variant="h6">Total Expenses</Typography>
                </Stack>
                <Typography variant="h3" color="error.main">
                  ₱68,230
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Iconify icon="eva:activity-fill" width={24} color="primary.main" />
                  <Typography variant="h6">Net Profit</Typography>
                </Stack>
                <Typography variant="h3" color="primary.main">
                  ₱57,220
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* OCR Receipt Processing */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  🤖 OCR Receipt Processing
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  AI-powered text extraction using Tesseract OCR
                </Typography>
                
                <Box 
                  sx={{ 
                    border: 2, 
                    borderStyle: 'dashed', 
                    borderColor: 'grey.300',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'grey.50',
                    mb: 2
                  }}
                >
                  <Iconify icon="eva:cloud-upload-fill" width={48} color="text.disabled" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Drop receipt images or PDFs here
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    AI will automatically extract and categorize data
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} justifyContent="center">
                  <Chip label="PNG" size="small" />
                  <Chip label="JPG" size="small" />
                  <Chip label="PDF" size="small" />
                  <Chip label="Auto-Extract" color="primary" size="small" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  📊 Quick Actions
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Generate reports and manage finances
                </Typography>

                <Stack spacing={2}>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<Iconify icon="eva:file-text-fill" />}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Generate Invoice
                  </Button>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<Iconify icon="eva:bar-chart-fill" />}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    BIR Tax Report
                  </Button>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<Iconify icon="eva:download-fill" />}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Export to Excel
                  </Button>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<Iconify icon="eva:calendar-fill" />}
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Monthly Summary
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Recent Transactions
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Auto-processed from OCR receipt scanning
                </Typography>
                
                <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 1 }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="subtitle2">Art Supplies - SM Store</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Auto-extracted from receipt • Today, 2:30 PM
                        </Typography>
                      </div>
                      <Typography variant="h6" color="error.main">-₱2,450</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="subtitle2">Custom Mug Order Payment</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Xendit Payment • Yesterday, 4:15 PM
                        </Typography>
                      </div>
                      <Typography variant="h6" color="success.main">+₱3,200</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="subtitle2">Office Supplies - National Book Store</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Auto-extracted from receipt • Jan 15, 10:00 AM
                        </Typography>
                      </div>
                      <Typography variant="h6" color="error.main">-₱850</Typography>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
} 