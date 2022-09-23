import React, { useEffect } from "react";

import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const HeartTest = ({ like, addWishList }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} /> */}
      {like ? (
        <FavoriteIcon onClick={addWishList} />
      ) : (
        <FavoriteBorderOutlinedIcon onClick={addWishList} />
      )}
    </>
  );
};

export default HeartTest;

const Heart = styled.img`
  // css
  width: 20px;
`;
