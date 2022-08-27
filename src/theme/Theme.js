import {createTheme} from "@material-ui/core/styles";

export const theme = createTheme({
    common: {
        mainFont: {
            fontFamily: "\"Segoe UI\", Arial, sans-serif",
        },
        mainColorText: {
            color: 'rgb(229, 170, 22)'
        },
        menuItemHover: {
            "& li": {
                "& a": {
                    "&:hover": {
                        color: 'rgba(229, 170, 10)',
                        cursor: 'pointer',
                        borderBottom: '1px dotted rgb(229, 170, 22)',
                        borderRadius: 15
                    }
                },
            }
        },
        menuItemSelected: {
            borderBottom: '1px solid rgb(229, 170, 22)',
            color: 'rgb(229, 170, 22)',
        },
        hoverStyleLogo: {
            "&:hover": {
                color: 'rgba(229, 170, 10)',
            }
        }
    }
})