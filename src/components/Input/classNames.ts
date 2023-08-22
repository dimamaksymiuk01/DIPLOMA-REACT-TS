type Value = string | number | boolean | undefined | null;
type Mapping = Record<string, unknown>;
type ArgumentArray = Array<Argument>;
type Argument = Value | Mapping | ArgumentArray;

function classNames(...args: ArgumentArray): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (typeof arg === 'object' && arg !== null) {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(' ');
}

export default classNames;
