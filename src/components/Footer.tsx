export default function Header() {
    return (
        <footer className="  bg-white py-6 px-4 border-t " >
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 ">
                <div>
                    <h3 className="font-bold mb-2">Features</h3>
                    <ul className="space-y-1">
                        <li>School & District</li>
                        <li>Wayground for Business</li>
                        <li>Create a quiz</li>
                        <li>Create a lesson</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Subjects</h3>
                    <ul className="space-y-1">
                        <li>Mathematics</li>
                        <li>Social Studies</li>
                        <li>Science</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">About</h3>
                    <ul className="space-y-1">
                        <li>Our Story</li>
                        <li>Wayground Blog</li>
                        <li>Media Kit</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Support</h3>
                    <ul className="space-y-1">
                        <li>FAQ</li>
                        <li>Help & Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Teacher Resources</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-6 flex justify-between items-center flex-wrap">
                <div className="text-gray-600">
                    © 2025 Quizizz Inc. (DBA Wayground) | <a href="#" className="underline">Sitemap</a>
                </div>
                <div className="flex space-x-2">
                    <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/instagram.png" alt="Instagram" /></a>
                </div>
            </div>
        </footer>
    )
}