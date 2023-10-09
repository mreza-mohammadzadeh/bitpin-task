
const PlusIcon = (props: any) => {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1106_2590)">
                <circle cx="12" cy="11" r="6" fill="white" />
                <path d="M12.3333 3C7.74167 3 4 6.74167 4 11.3333C4 15.925 7.74167 19.6667 12.3333 19.6667C16.925 19.6667 20.6667 15.925 20.6667 11.3333C20.6667 6.74167 16.925 3 12.3333 3ZM15.6667 11.9583H12.9583V14.6667C12.9583 15.0083 12.675 15.2917 12.3333 15.2917C11.9917 15.2917 11.7083 15.0083 11.7083 14.6667V11.9583H9C8.65833 11.9583 8.375 11.675 8.375 11.3333C8.375 10.9917 8.65833 10.7083 9 10.7083H11.7083V8C11.7083 7.65833 11.9917 7.375 12.3333 7.375C12.675 7.375 12.9583 7.65833 12.9583 8V10.7083H15.6667C16.0083 10.7083 16.2917 10.9917 16.2917 11.3333C16.2917 11.675 16.0083 11.9583 15.6667 11.9583Z" />
            </g>
            <defs>
                <filter id="filter0_d_1106_2590" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0745098 0 0 0 0 0.305882 0 0 0 0 0.368627 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1106_2590" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1106_2590" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}
export const Plus2Icon = (props:any) => {
    return (
        <svg {...props}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5 0C16.8375 0 0 16.8375 0 37.5C0 58.1625 16.8375 75 37.5 75C58.1625 75 75 58.1625 75 37.5C75 16.8375 58.1625 0 37.5 0ZM52.5 40.3125H40.3125V52.5C40.3125 54.0375 39.0375 55.3125 37.5 55.3125C35.9625 55.3125 34.6875 54.0375 34.6875 52.5V40.3125H22.5C20.9625 40.3125 19.6875 39.0375 19.6875 37.5C19.6875 35.9625 20.9625 34.6875 22.5 34.6875H34.6875V22.5C34.6875 20.9625 35.9625 19.6875 37.5 19.6875C39.0375 19.6875 40.3125 20.9625 40.3125 22.5V34.6875H52.5C54.0375 34.6875 55.3125 35.9625 55.3125 37.5C55.3125 39.0375 54.0375 40.3125 52.5 40.3125Z" />
        </svg>

    )
}

export default PlusIcon