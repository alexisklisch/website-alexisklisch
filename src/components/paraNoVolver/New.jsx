export function New({ title, body, date, link, username }) {
  return (
    <article className="px-4 text-center">
      <h2 className="font-bold text-brand-dark text-xl">{title}</h2>
      <p className="text-sm text-brand-dark-300">{body}</p>
      <div className="text-xs mt-3">
        <div className="flex gap-3 justify-center">
          <a
            className="border border-brand-dark-300 rounded-full text-brand-dark w-fit px-3"
            href={link}
            target="_blank"
          >
            Política
          </a>
          <p className="text-brand-dark-300">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <a className="text-center text-brand-green">@{username}</a>
      </div>
    </article>
  );
}
