import React from 'react';
import { Box, Paper } from '@mui/material';

interface PagedPreviewProps {
    children: React.ReactNode;
}

const PAGE_HEIGHT = 1123; // A4 (px)
const PAGE_WIDTH = 794;
const PAGE_MARGIN_TOP = 16;
const PAGE_MARGIN_BOTTOM = 10;
const PAGE_MARGIN_SIDE = 25;

const PagedResumePreview: React.FC<PagedPreviewProps> = ({ children }) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const [pageCount, setPageCount] = React.useState(1);

    React.useEffect(() => {
        if (wrapperRef.current) {
            const totalHeight = wrapperRef.current.scrollHeight;
            const contentHeight = PAGE_HEIGHT - PAGE_MARGIN_TOP - PAGE_MARGIN_BOTTOM;
            const pagesNeeded = Math.ceil(totalHeight / contentHeight);
            setPageCount(pagesNeeded || 1);
        }
    }, [children]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                overflowX: 'hidden',
                padding: { xs: 1, sm: 2 }
            }}
        >
            {Array.from({ length: pageCount }).map((_, i) => (
                <Paper
                    key={i}
                    elevation={3}
                    sx={{
                        maxWidth: '100%',
                        width: `${PAGE_WIDTH}px`,
                        height: `${PAGE_HEIGHT}px`,
                        backgroundColor: '#fff',
                        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                        mb: 3,
                        overflow: 'hidden',
                        position: 'relative',
                        boxSizing: 'border-box',
                    }}
                >
                    <Box
                        ref={i === 0 ? wrapperRef : null}
                        sx={{
                            position: 'absolute',
                            top: `-${i * PAGE_HEIGHT}px`,
                            left: 0,
                            width: '100%',
                            paddingTop: `${PAGE_MARGIN_TOP}px`,
                            paddingBottom: `${PAGE_MARGIN_BOTTOM}px`,
                            paddingLeft: `${PAGE_MARGIN_SIDE}px`,
                            paddingRight: `${PAGE_MARGIN_SIDE}px`,
                            boxSizing: 'border-box',
                        }}
                    >
                        {children}
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default PagedResumePreview;