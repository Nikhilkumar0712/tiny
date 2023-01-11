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
    image: require("../../assets/activedashboard.svg"),
    inactiveImage: require("../../assets/inactivedashboard.svg"),
    isCollapsible: false,
    screenName: "/Dashboard",
  },
  {
    id: 2,
    name: "Appointments",
    image: require("../../assets/activeappointment.svg"),
    inactiveImage: require("../../assets/inactiveappointment.svg"),
    isCollapsible: true,
    screenName: "/Appointments",
  },
  {
    id: 3,
    name: "Manage Patients",
    image: require("../../assets/activepatients.svg"),
    inactiveImage: require("../../assets/inactivepatients.svg"),
    isCollapsible: false,
    screenName: "/ManagePatients",
  },
  {
    id: 4,
    name: "Diagnosis",
    image: require("../../assets/activetooth.svg"),
    inactiveImage: require("../../assets/inactivetooth.svg"),
    isCollapsible: false,
    screenName: "/Diagnosis",
  },
  {
    id: 5,
    name: "Treatment",
    image: require("../../assets/activetreatment.svg"),
    inactiveImage: require("../../assets/inactivetreatment.svg"),
    isCollapsible: false,
    screenName: "/Treatments",
  },
  {
    id: 6,
    name: "Accounts",
    image: require("../../assets/activeaccounts.svg"),
    inactiveImage: require("../../assets/inactiveaccounts.svg"),
    isCollapsible: true,
    screenName: "/Accounts",
  },
  {
    id: 7,
    name: "Invoices",
    image: require("../../assets/activeinvoices.svg"),
    inactiveImage: require("../../assets/inactiveinvoices.svg"),
    isCollapsible: false,
    screenName: "/Invoices",
  },
  {
    id: 8,
    name: "Labs",
    image: require("../../assets/activeinvoices.svg"),
    inactiveImage: require("../../assets/inactiveinvoices.svg"),
    isCollapsible: false,
    screenName: "/Labs",
  },
  {
    id: 9,
    name: "Inventory",
    image: require("../../assets/activeinvoices.svg"),
    inactiveImage: require("../../assets/inactiveinvoices.svg"),
    isCollapsible: true,
    screenName: "/Inventory",
  },
  {
    id: 10,
    name: "Prescriptions",
    image: require("../../assets/activeinvoices.svg"),
    inactiveImage: require("../../assets/inactiveinvoices.svg"),
    isCollapsible: false,
    screenName: "/Prescriptions",
  }
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
  const [openAccounts, setopenAccounts] = React.useState<boolean | false>(
    false
  );

  const { item } = props;
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAccoutsClick = () => {
    setopenAccounts(!openAccounts);
  };

  return (
    <>
      {item.isCollapsible ? (
        <>
          {item.name == "Accounts" ? (
            <>
              <Box
                style={
                  location.pathname === "/Billing" ||
                  location.pathname === "Receipt"
                    ? styles.menuItemsActive
                    : styles.menuItems
                }
                onClick={handleAccoutsClick}
              >
                <Box sx={styles.row}>
                  <Box
                    component="img"
                    sx={styles.menuImage}
                    alt="Logo"
                    src={
                      location.pathname === "/Billing" ||
                      location.pathname === "Receipt" ||
                      location.pathname === "Expenses"
                        ? item.image
                        : item.inactiveImage
                    }
                  />
                  <Typography
                    sx={
                      location.pathname === "/Billing" ||
                      location.pathname === "Receipt" ||
                      location.pathname === "Expenses"
                        ? styles.menuTextActive
                        : styles.menuText
                    }
                  >
                    {item.name}
                  </Typography>
                  {open ? (
                    <ExpandLess style={styles.iconColor} />
                  ) : (
                    <ExpandMore style={styles.iconColor} />
                  )}
                </Box>
              </Box>
              <Collapse in={openAccounts} timeout="auto" unmountOnExit>
                <Link to={`/Billing`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>Billing</Typography>
                  </Box>
                </Link>

                <Link to={`/Receipt`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>Receipt</Typography>
                  </Box>
                </Link>

                <Link to={`/Expenses`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>Expenses</Typography>
                  </Box>
                </Link>
              </Collapse>
            </>
          ) : item.name == "Inventory" ? (
            <>
              <Box
                style={
                  location.pathname === "/UnderUsageInventory" || location.pathname === "/Inventory" || location.pathname === "/AddInventory" || location.pathname === "/AddInventoryStep2"  || location.pathname === "/InventoryDetails"  || location.pathname === "/InvoiceDetails"
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
                      location.pathname === "/UnderUsageInventory" || location.pathname === "/Inventory" || location.pathname === "/AddInventory" || location.pathname === "/AddInventoryStep2"  || location.pathname === "/InventoryDetails"  || location.pathname === "/InvoiceDetails"
                        ? item.image
                        : item.inactiveImage
                    }
                  />
                  <Typography
                    sx={
                      location.pathname === "/UnderUsageInventory" || location.pathname === "/Inventory" || location.pathname === "/AddInventory" || location.pathname === "/AddInventoryStep2"  || location.pathname === "/InventoryDetails"  || location.pathname === "/InvoiceDetails"
                        ? styles.menuTextActive
                        : styles.menuText
                    }
                  >
                    {item.name}
                  </Typography>
                  {open ? (
                    <ExpandLess style={styles.iconColor} />
                  ) : (
                    <ExpandMore style={styles.iconColor} />
                  )}
                </Box>
              </Box>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to={`/Inventory`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>View</Typography>
                  </Box>
                </Link>
                <Link to={`/UnderUsageInventory`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>Under usage</Typography>
                  </Box>
                </Link>
              </Collapse>
            </>
          ) : (
            <>
              <Box
                style={
                  location.pathname === "/Appointments" ||
                  location.pathname === "/Bookings"
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
                      location.pathname === "/Appointments" ||
                      location.pathname === "/Bookings"
                        ? item.image
                        : item.inactiveImage
                    }
                  />
                  <Typography
                    sx={
                      location.pathname === "/Appointments" ||
                      location.pathname === "/Bookings"
                        ? styles.menuTextActive
                        : styles.menuText
                    }
                  >
                    {item.name}
                  </Typography>
                  {open ? (
                    <ExpandLess style={styles.iconColor} />
                  ) : (
                    <ExpandMore style={styles.iconColor} />
                  )}
                </Box>
              </Box>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Link to={`/SlotsView`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>Calendar</Typography>
                  </Box>
                </Link>
                <Link to={`/Appointments`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>
                      View Confirmed
                    </Typography>
                  </Box>
                </Link>

                <Link to={`/Bookings`} style={styles.link}>
                  <Box style={styles.menuItems}>
                    <Typography sx={styles.subMenuText}>
                      View Bookings
                    </Typography>
                  </Box>
                </Link>
              </Collapse>
            </>
          )}
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
    </Box>
  );
};

export default SideBar;
