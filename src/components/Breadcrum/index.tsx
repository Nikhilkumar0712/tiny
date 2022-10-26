import React from 'react';
import { Box ,Breadcrumbs,Typography} from "@mui/material";
import { styles } from './styles';

interface BreadcrumbProps {
    breadcrumbsArr : any;
    title : string
}

const Breadcrum = (props : BreadcrumbProps) => {
    const { title , breadcrumbsArr } = props;
    return(
        <Box style={styles.breadcrumContainer}>
            <Typography
            sx={styles.breadcrumbTitle}
            >
                {title}
            </Typography>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbsArr}
            </Breadcrumbs>
        </Box>
    )
}

export default Breadcrum;