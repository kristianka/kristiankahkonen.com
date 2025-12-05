import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiRust,
    SiGo,
    SiCplusplus,
    SiC,
    SiCsharp,
    SiPhp,
    SiRuby,
    SiSwift,
    SiKotlin,
    SiDart,
    SiHtml5,
    SiCss3,
    SiSass,
    SiJson,
    SiMarkdown,
    SiYaml,
    SiDocker,
    SiGraphql,
    SiGnubash,
    SiPowershell,
    SiReact,
    SiVuedotjs,
    SiSvelte,
    SiAngular,
    SiNextdotjs,
    SiTailwindcss,
    SiPrisma
} from "react-icons/si";
import { VscCode, VscTerminal, VscFile } from "react-icons/vsc";
import { IconType } from "react-icons";

interface LanguageIconProps {
    language: string;
    className?: string;
}

interface LanguageConfig {
    icon: IconType;
    label: string;
    color?: string;
}

// Map of language identifiers to their icons and display names
const languageMap: Record<string, LanguageConfig> = {
    // TypeScript variants
    typescript: { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
    ts: { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
    tsx: { icon: SiReact, label: "tsx", color: "#61dafb" },

    // JavaScript variants
    javascript: { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
    js: { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
    jsx: { icon: SiReact, label: "jsx", color: "#61dafb" },
    mjs: { icon: SiJavascript, label: "JavaScript Module", color: "#f7df1e" },
    cjs: { icon: SiJavascript, label: "CommonJS", color: "#f7df1e" },

    // Python
    python: { icon: SiPython, label: "Python", color: "#3776ab" },
    py: { icon: SiPython, label: "Python", color: "#3776ab" },

    // Systems languages
    rust: { icon: SiRust, label: "Rust", color: "#dea584" },
    rs: { icon: SiRust, label: "Rust", color: "#dea584" },
    go: { icon: SiGo, label: "Go", color: "#00add8" },
    golang: { icon: SiGo, label: "Go", color: "#00add8" },
    cpp: { icon: SiCplusplus, label: "C++", color: "#00599c" },
    "c++": { icon: SiCplusplus, label: "C++", color: "#00599c" },
    c: { icon: SiC, label: "C", color: "#a8b9cc" },
    csharp: { icon: SiCsharp, label: "C#", color: "#512bd4" },
    cs: { icon: SiCsharp, label: "C#", color: "#512bd4" },

    // Other popular languages
    php: { icon: SiPhp, label: "PHP", color: "#777bb4" },
    ruby: { icon: SiRuby, label: "Ruby", color: "#cc342d" },
    rb: { icon: SiRuby, label: "Ruby", color: "#cc342d" },
    swift: { icon: SiSwift, label: "Swift", color: "#f05138" },
    kotlin: { icon: SiKotlin, label: "Kotlin", color: "#7f52ff" },
    kt: { icon: SiKotlin, label: "Kotlin", color: "#7f52ff" },
    dart: { icon: SiDart, label: "Dart", color: "#0175c2" },
    java: { icon: VscCode, label: "Java", color: "#ed8b00" },

    // Web technologies
    html: { icon: SiHtml5, label: "HTML", color: "#e34f26" },
    css: { icon: SiCss3, label: "CSS", color: "#1572b6" },
    scss: { icon: SiSass, label: "SCSS", color: "#cc6699" },
    sass: { icon: SiSass, label: "Sass", color: "#cc6699" },
    less: { icon: SiCss3, label: "Less", color: "#1d365d" },

    // Data formats
    json: { icon: SiJson, label: "JSON", color: "#000000" },
    jsonc: { icon: SiJson, label: "JSON with Comments", color: "#000000" },
    yaml: { icon: SiYaml, label: "YAML", color: "#cb171e" },
    yml: { icon: SiYaml, label: "YAML", color: "#cb171e" },
    toml: { icon: VscFile, label: "TOML" },
    xml: { icon: VscCode, label: "XML", color: "#0060ac" },
    md: { icon: SiMarkdown, label: "Markdown" },
    markdown: { icon: SiMarkdown, label: "Markdown" },
    mdx: { icon: SiMarkdown, label: "MDX", color: "#fcb32c" },

    // Shell/Terminal
    bash: { icon: SiGnubash, label: "Bash" },
    sh: { icon: SiGnubash, label: "Shell" },
    shell: { icon: VscTerminal, label: "Shell" },
    zsh: { icon: VscTerminal, label: "Zsh" },
    fish: { icon: VscTerminal, label: "Fish" },
    powershell: { icon: SiPowershell, label: "PowerShell", color: "#5391fe" },
    ps1: { icon: SiPowershell, label: "PowerShell", color: "#5391fe" },
    cmd: { icon: VscTerminal, label: "Command Prompt" },
    terminal: { icon: VscTerminal, label: "Terminal" },

    // Frameworks
    react: { icon: SiReact, label: "React", color: "#61dafb" },
    vue: { icon: SiVuedotjs, label: "Vue", color: "#4fc08d" },
    svelte: { icon: SiSvelte, label: "Svelte", color: "#ff3e00" },
    angular: { icon: SiAngular, label: "Angular", color: "#dd0031" },
    nextjs: { icon: SiNextdotjs, label: "Next.js" },

    // Config/DevOps
    docker: { icon: SiDocker, label: "Docker", color: "#2496ed" },
    dockerfile: { icon: SiDocker, label: "Dockerfile", color: "#2496ed" },
    graphql: { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
    gql: { icon: SiGraphql, label: "GraphQL", color: "#e10098" },
    sql: { icon: VscCode, label: "SQL" },
    prisma: { icon: SiPrisma, label: "Prisma", color: "#2d3748" },

    // Config files
    env: { icon: VscFile, label: "Environment Variables" },
    ini: { icon: VscFile, label: "INI" },
    conf: { icon: VscFile, label: "Config" },
    config: { icon: VscFile, label: "Config" },

    // Other
    text: { icon: VscFile, label: "Plain Text" },
    txt: { icon: VscFile, label: "Plain Text" },
    log: { icon: VscFile, label: "Log" },
    diff: { icon: VscCode, label: "Diff" },
    regex: { icon: VscCode, label: "Regex" },
    tailwindcss: { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06b6d4" }
};

export const LanguageIcon = ({ language, className = "" }: LanguageIconProps) => {
    const lang = language.toLowerCase();
    const config = languageMap[lang] || { icon: VscCode, label: language };
    const Icon = config.icon;

    return (
        <span title={config.label} className={`inline-flex items-center ${className}`}>
            <Icon
                className="h-4 w-4 grayscale"
                style={config.color ? { color: config.color } : undefined}
                aria-label={config.label}
            />
        </span>
    );
};

export const getLanguageLabel = (language: string): string => {
    const lang = language.toLowerCase();
    return languageMap[lang]?.label || language;
};
