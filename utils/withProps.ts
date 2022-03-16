import { ThemedStyledFunction } from 'styled-components';

// * TODO: className Error가 발생하므로 type에 포함시킬 방법 찾기
const withProps = <U>() => {
  return <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = Record<string, unknown>
  >(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> =>
    fn as unknown as ThemedStyledFunction<P & U, T, O & U>;
};

export default withProps;
