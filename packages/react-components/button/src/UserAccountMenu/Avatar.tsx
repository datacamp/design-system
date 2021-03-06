import { css } from '@emotion/react';
import { useState } from 'react';

import { FULL_MENU_MEDIA_QUERY } from './constants';
import defaultAvatar from './defaultAvatar';

const wrapperStyle = css({
  borderRadius: '50%',
  [FULL_MENU_MEDIA_QUERY]: {
    height: 22,
    width: 22,
  },
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
        alt=""
        css={imageStyle}
        data-testid="user-account-menu-avatar"
        onError={() => setHasImgError(true)}
        src={imgSrc}
      />
    </div>
  );
};

export default Avatar;
