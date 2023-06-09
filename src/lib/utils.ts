import { APIRandomUser, RandomUser } from "../types/randomUser";

export function mapAPIPayloadToRandomUser(payload: APIRandomUser): RandomUser {
  const colors = [
    "bg-red-600",
    "bg-amber-600",
    "bg-yellow-400",
    "bg-lime-500",
    "bg-emerald-600",
    "bg-cyan-400",
    "bg-blue-700",
    "bg-indigo-600",
    "bg-violet-900",
    "bg-purple-800",
    "bg-fuchsia-500",
    "bg-pink-400",
    "bg-rose-700",
  ];

  const color = Math.max(Math.round(Math.random() * colors.length) - 1, 0);

  return {
    firstName: payload.name.first,
    lastName: payload.name.last,
    username: payload.login.username,
    city: payload.location.city,
    state: payload.location.state,
    country: payload.location.country,
    gender: payload.gender,
    dob: new Date(payload.dob.date),
    eyeColor: colors[color],
    timezone: {
      offset: payload.location.timezone.offset,
      description: payload.location.timezone.description,
    },
    largePhoto: payload.picture.large,
  };
}
