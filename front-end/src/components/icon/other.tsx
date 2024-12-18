export const KebaIcon = () => {
  return (
    <svg
      className="w-8 text-deep-purple-accent-400"
      viewBox="0 0 24 24"
      stroke-linejoin="round"
      stroke-width="2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke="currentColor"
      fill="none"
    >
      <rect x="3" y="1" width="7" height="12"></rect>
      <rect x="3" y="17" width="7" height="6"></rect>
      <rect x="14" y="1" width="7" height="6"></rect>
      <rect x="14" y="11" width="7" height="12"></rect>
    </svg>
  );
};
function IconListAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M350 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h300m0 200c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h300m620-200c20 0 30 16.667 30 50s-10 50-30 50H800v170c0 20-16.667 30-50 30s-50-10-50-30V550H536c-20 0-30-16.667-30-50s10-50 30-50h164V280c0-20 16.667-30 50-30s50 10 50 30v170h170M350 250c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h300" />
    </svg>
  );
}

export default IconListAdd;
