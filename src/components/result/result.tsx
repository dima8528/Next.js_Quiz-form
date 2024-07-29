import Image from 'next/image';
import classNames from 'classnames';
import './styles.scss';

type ResultProps = {
  result: boolean[];
}

export function Result({ result }: ResultProps) {
  const normalizedResult = Array(3).fill(false).map((_, i) => {
    if (result[i]) {
      return true;
    }

    if (result[i] === false) {
      return false;
    }

    return undefined;
  });

  return (
    <div className="result">
      {normalizedResult.map((res, i) => (
        <div key={i} className={classNames('circle', {
          'isSuccess': res,
          'isError': res === false
        })}>
          {res && (
            <Image width={30} height={30} src="tick.svg" alt="tick" />
          )}

          {res === false && (
            <Image width={30} height={30} src="cross.svg" alt="cross" />
          )}
        </div>
      ))}
    </div>
  );
}
