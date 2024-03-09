export default function useResposiveTo(display) {
    const steps = {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    };

    return `@media min-width: ${steps[display]}`;
}