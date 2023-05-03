import db from "../models";
const Post2Data = db.post2_data;

const particulardatas = async (data:any) => {
  const datas = await Post2Data.find({ category: data });
  if(!datas){
    throw new Error("COULD");
  }
  console.log("DFDFD"+datas)
  return datas;
};


export const repoParticulardata={
  particulardatas
}