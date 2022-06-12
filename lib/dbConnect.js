import mongoose from "mongoose";

if (!process.env.DATABASE_URL) {
	throw new Error("Please define the databse url connection string environment variable.");
}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			// bufferCommands: false,
			// bufferMaxEntries: 0,
			// useFindAndModify: true,
			// useCreateIndex: true,
		};

		cached.promise = mongoose.connect(process.env.DATABASE_URL, opts).then((mongoose) => {
			return mongoose;
		});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default dbConnect;
