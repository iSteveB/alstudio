import './global.css';

export default function PortfolioLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (

      <div>
        {props.children}
        {props.modal}
      </div>
  );
}
