const FeatureItem = (props) => {
  const { image, title, description } = props;
  return (
    <div className="w-[260px] mx-4 my-6">
      <img src={image} className="w-[120px]"/>
      <div className="my-2 text-xl font-stint font-bold text-violet-950">{title}</div>
      <div className="text-slate-800">{description}</div>
    </div>
  );
};

export default FeatureItem;
