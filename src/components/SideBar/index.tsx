import React from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { styles } from "../SideBar/styles";
import { Link, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const sideMenuList = [
  {
    id: 1,
    name: "Dashboard",
    image: require("../../assets/activedashboard.svg").default,
    inactiveImage: require("../../assets/inactivedashboard.svg").default,
    isCollapsible: false,
    screenName: "/Dashboard",
  },
  {
    id: 2,
    name: "Appointments",
    image: require("../../assets/activeappointment.svg").default,
    inactiveImage: require("../../assets/inactiveappointment.svg").default,
    isCollapsible: true,
    screenName: "/Appointments",
  },
  {
    id: 3,
    name: "Manage Patients",
    image: require("../../assets/activepatients.svg").default,
    inactiveImage: require("../../assets/inactivepatients.svg").default,
    isCollapsible: false,
    screenName: "/ManagePatients",
  },
  {
    id: 4,
    name: "Diagnosis",
    image: require("../../assets/activetooth.svg").default,
    inactiveImage: require("../../assets/inactivetooth.svg").default,
    isCollapsible: false,
    screenName: "/Diagnosis",
  },
  {
    id: 5,
    name: "Treatment",
    image: require("../../assets/activetreatment.svg").default,
    inactiveImage: require("../../assets/inactivetreatment.svg").default,
    isCollapsible: false,
    screenName: "/Treatment",
  },
  {
    id: 6,
    name: "Accounts",
    image: require("../../assets/activeaccounts.svg").default,
    inactiveImage: require("../../assets/inactiveaccounts.svg").default,
    isCollapsible: false,
    screenName: "/Accounts",
  },
  {
    id: 7,
    name: "Invoices",
    image: require("../../assets/activeinvoices.svg").default,
    inactiveImage: require("../../assets/inactiveinvoices.svg").default,
    isCollapsible: false,
    screenName: "/Invoices",
  },
  {
    id: 8,
    name: "Labs",
    image: require("../../assets/activeinvoices.svg").default,
    inactiveImage: require("../../assets/inactiveinvoices.svg").default,
    isCollapsible: false,
    screenName: "/Labs",
  },
  {
    id: 9,
    name: "Inventory",
    image: require("../../assets/activeinvoices.svg").default,
    inactiveImage: require("../../assets/inactiveinvoices.svg").default,
    isCollapsible: false,
    screenName: "/Inventory",
  },
];

interface sidemenuInterface {
  item: {
    name: string;
    id: number;
    image: string;
    isCollapsible: boolean;
    inactiveImage: string;
    screenName: string;
  };
}

const SideMenuItem = (props: sidemenuInterface) => {
  const [open, setOpen] = React.useState<boolean | false>(false);

  const { item } = props;
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {item.isCollapsible ? (
        <>
          <Box
            style={
              (location.pathname === '/Appointments' || location.pathname === '/Bookings')
                ? styles.menuItemsActive
                : styles.menuItems
            }
            onClick={handleClick}
          >
            <Box sx={styles.row}>
              <Box
                component="img"
                sx={styles.menuImage}
                alt="Logo"
                src={
                  (location.pathname === '/Appointments' || location.pathname === '/Bookings')
                    ? item.image
                    : item.inactiveImage
                }
              />
              <Typography
                sx={
                  (location.pathname === '/Appointments' || location.pathname === '/Bookings')
                    ? styles.menuTextActive
                    : styles.menuText
                }
              >
                {item.name}
              </Typography>
              {open ? <ExpandLess style={styles.iconColor} /> : <ExpandMore style={styles.iconColor} />}
            </Box>
          </Box>

          <Collapse in={open} timeout="auto" unmountOnExit>
          <Link to={`${item.screenName}`} style={styles.link}>
            <Box style={styles.menuItems}>
              <Typography
                sx={
                  location.pathname === '/Appointments'
                    ? styles.subMenuTextActive
                    : styles.subMenuText
                }
              >
                View Appointments
              </Typography>
            </Box>
            </Link>
            <Link to={`${item.screenName}`} style={styles.link}>
            <Box style={styles.menuItems}>
              <Typography
                sx={
                  location.pathname === '/Bookings'
                    ? styles.subMenuTextActive
                    : styles.subMenuText
                }
              >
                View Bookings
              </Typography>
            </Box>
            </Link>
            <Link to={`${item.screenName}`} style={styles.link}>
              <Box style={styles.menuItems}>
                <Typography
                  sx={
                    location.pathname === '/ViewSlots'
                      ? styles.subMenuTextActive
                      : styles.subMenuText
                  }
                >
                  Slots View
                </Typography>
              </Box>
            </Link>
            
          </Collapse>
        </>
      ) : (
        <Box
          style={
            location.pathname === item.screenName
              ? styles.menuItemsActive
              : styles.menuItems
          }
          onClick={() => setOpen(false)}
        >
          <Box sx={styles.row}>
            <Box
              component="img"
              sx={styles.menuImage}
              alt="Logo"
              src={
                location.pathname === item.screenName
                  ? item.image
                  : item.inactiveImage
              }
            />
            <Link to={`${item.screenName}`} style={styles.link}>
              <Typography
                sx={
                  location.pathname === item.screenName
                    ? styles.menuTextActive
                    : styles.menuText
                }
              >
                {item.name}
              </Typography>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

const SideBar = () => {
  return (
    <Box sx={styles.sidebarContainer}>
      <Box sx={styles.row}>
        <Box
          component="img"
          sx={styles.logoImage}
          alt="Logo"
          src={require("../../assets/logo.png")}
        />
        <Typography sx={styles.logoText}>Tiny Pearls</Typography>
      </Box>
      <Box sx={styles.menuItemContainer}>
        {sideMenuList.map((item) => {
          return <SideMenuItem item={item} />;
        })}
      </Box>
      <Box sx={styles.sidebarFooterContainer}>
        <Box style={styles.menuItems}>
          <Box sx={styles.row}>
            <Box
              component="img"
              sx={styles.menuFooterImage}
              alt="Logo"
              src={require("../../assets/settings.png")}
            />
            <Typography sx={styles.menuFooterText}>Settings</Typography>
          </Box>
        </Box>

        <Box style={styles.menuItems}>
          <Box sx={styles.row}>
            <Box
              component="img"
              sx={styles.menuFooterImage}
              alt="Logo"
              src={require("../../assets/logout.png")}
            />
            <Typography sx={styles.menuFooterText}>Logout</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
