export default function Loading() {
    return (
        <main>
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                <h2 className="ml-4 text-lg text-center text-gray-600 dark:text-gray-300">
                    Loading the blog...
                </h2>
            </div>
        </main>
    );
}
