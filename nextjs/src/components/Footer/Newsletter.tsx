export default function Newsletter() {
    return (
        <div className="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-slate-700">
            <p className="text-base font-medium text-primary-700 dark:text-primary-500">
                Subscribe to the newsletter
            </p>
            <hr className="border-gray-200 dark:border-gray-600" />
            <form action="#">
                <div className="items-end space-y-4 sm:flex sm:space-y-0">
                    <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Get the latest blogs to your inbox. No spam, unsubscribe any time.
                            (Coming soon!)
                        </label>
                        <input
                            disabled={true}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-300 p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full"
                            // className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full"
                            placeholder="Enter your email address"
                            type="email"
                            id="email"
                        />
                    </div>
                    <div>
                        <button
                            disabled={true}
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-black dark:text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
