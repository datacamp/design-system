import { css } from '@emotion/react';
import { useState } from 'react';

import defaultAvatar from './defaultAvatar';

const wrapperStyle = css({
  '@media (min-width: 821px)': {
    height: 22,
    width: 22,
  },
  borderRadius: '50%',
  height: 36,
  overflow: 'hidden',
  width: 36,
});

const imageStyle = css({
  height: '100%',
  width: 'auto',
});

type AvatarProps = {
  avatarUrl?: string;
};

const Avatar = ({ avatarUrl }: AvatarProps): JSX.Element => {
  const [hasImgError, setHasImgError] = useState(false);
  const imgSrc = !avatarUrl || hasImgError ? defaultAvatar : avatarUrl;

  return (
    <div css={wrapperStyle}>
      <img
        alt="Profile avatar"
        css={imageStyle}
        onError={() => setHasImgError(true)}
        src={imgSrc}
      />
    </div>
  );
};

export default Avatar;
