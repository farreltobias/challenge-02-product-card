type Props = {
  size?: number
} & React.SVGProps<SVGSVGElement>

export const CloseIcon: React.FC<Props> = ({ size = 16, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#271A45"
        fillRule="evenodd"
        d="M.195.195c.26-.26.683-.26.943 0L8 7.057 14.862.195a.667.667 0 1 1 .943.943L8.943 8l6.862 6.862a.667.667 0 1 1-.943.943L8 8.943l-6.862 6.862a.667.667 0 0 1-.943-.943L7.057 8 .195 1.138a.667.667 0 0 1 0-.943Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
