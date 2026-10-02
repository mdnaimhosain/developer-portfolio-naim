
import { useEffect, useState } from "react";

const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React.js Developer",
];

export default function DeveloperText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = deleting ? 45 : 90;

        const timer = setTimeout(() => {
            if (!deleting) {
                const nextText = currentRole.slice(0, text.length + 1);
                setText(nextText);

                if (nextText === currentRole) {
                    setTimeout(() => setDeleting(true), 1000);
                }
            } else {
                const nextText = currentRole.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [text, deleting, roleIndex]);

    return (
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
            {text}
            <span className="text-cyan-500 animate-pulse">|</span>
        </h2>
    );
}