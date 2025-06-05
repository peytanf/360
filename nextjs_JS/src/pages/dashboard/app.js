// next
import Head from 'next/head';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// _mock_
import {
  _appFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _appInvoices,
} from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
// assets
import { SeoIllustration } from '../../assets/illustrations';

// ----------------------------------------------------------------------

GeneralAppPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title>Analytics Overview | STUDIO 360</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {/* Welcome Section */}
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Welcome to STUDIO 360! \n ${user?.displayName}`}
              description="Your AI-powered web management platform for Kitsch Studio. Monitor sales, manage inventory, and automate bookkeeping with artificial intelligence."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Explore Dashboard</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid>

          {/* Top Row - 4 Main Metrics */}
          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Total Revenue"
              percent={12.5}
              total={125450}
              chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Net Profit"
              percent={8.2}
              total={48700}
              chart={{
                colors: [theme.palette.success.main],
                series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Orders Completed"
              percent={15.3}
              total={1245}
              chart={{
                colors: [theme.palette.info.main],
                series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Low Stock Alerts"
              percent={-5.2}
              total={23}
              chart={{
                colors: [theme.palette.error.main],
                series: [12, 17, 25, 18, 23, 28, 15, 20, 35, 23],
              }}
            />
          </Grid>

          {/* Second Row - Sales Chart & Inventory Updates */}
          <Grid item xs={12} md={8}>
            <AppAreaInstalled
              title="Sales Chart (Line/Bar)"
              subheader="Monthly sales performance"
              chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                series: [
                  {
                    year: '2024',
                    data: [
                      { name: 'Sales', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                      { name: 'Target', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                  {
                    year: '2023',
                    data: [
                      { name: 'Sales', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                      { name: 'Target', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                    ],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppCurrentDownload
              title="Inventory Updates"
              chart={{
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.warning.main,
                  theme.palette.error.main,
                ],
                series: [
                  { label: 'In Stock', value: 12244 },
                  { label: 'Low Stock', value: 5345 },
                  { label: 'Out of Stock', value: 4313 },
                  { label: 'Pending', value: 7343 },
                ],
              }}
            />
          </Grid>

          {/* Third Row - Bookkeeping & Insights */}
          <Grid item xs={12} md={6}>
            <AppNewInvoice
              title="Bookkeeping / Recent Logs"
              tableData={_appInvoices}
              tableLabels={[
                { id: 'id', label: 'Transaction ID' },
                { id: 'category', label: 'Type' },
                { id: 'price', label: 'Amount' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <AppTopRelated title="Insights or Quick Actions" list={_appRelated} />
              
              <Stack spacing={2}>
              <AppWidget
                  title="AI Bookkeeping"
                  total={156}
                  icon="eva:file-text-fill"
                chart={{
                    series: 78,
                }}
              />

              <AppWidget
                  title="Smart Alerts"
                  total={23}
                  icon="eva:bell-fill"
                  color="warning"
                chart={{
                    series: 45,
                }}
              />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
