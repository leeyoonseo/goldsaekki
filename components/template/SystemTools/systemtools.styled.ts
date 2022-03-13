import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  vertical-align: top;

  button {
    vertical-align: middle;
  }
`;

export const Tools = styled.ul`
  li {
    display: inline-block;
    vertical-align: middle;

    & + li {
      margin-left: 7px;
    }
  }
`;

// export const SoundIcon = styled(SoundOutlined)`
//   font-size: 18px;
//   color: white;
// `;

// export const SoundIconActivated = styled(SoundFilled)`
//   font-size: 18px;
//   color: white;
// `;

// export const StopIcon = styled(StopOutlined)`
//   font-size: 18px;
//   color: white;
// `;
