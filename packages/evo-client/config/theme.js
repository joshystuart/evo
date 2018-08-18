export default {
    palette: {
        primary: {
            light: '#67acf3',
            main: '#4298f0',
            dark: '#2e6aa8',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b74368',
            main: '#a61443',
            dark: '#740e2e',
            contrastText: '#fff',
        },
    },
    overrides: {
        MuiCard: {
            root: {
                backgroundColor: 'rgba(0,0,0,0.65)',
                borderRadius: 10,
                boxShadow: 'none',
                height: '100%',
            },
        },
        MuiCardContent: {
            root: {
                paddingBottom: 0,
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
                paddingTop: 0,
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                height: '100%',
                padding: 0,
                '&:last-child': {
                    paddingBottom: 0,
                },
            },
        },
        MuiTabs: {
            root: {
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.65)',
            },
            indicator: {
                height: '100%',
            },
        },
        MuiTab: {
            root: {
                backgroundColor: 'none',
                zIndex: 10,
            },
            textColorInherit: {
                color: '#fff',
            },
        },
    },
};
