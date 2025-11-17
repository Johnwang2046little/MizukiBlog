// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "Scratch",
		name: "Scratch",
		description:
			"一个可以通过拖拽积木来构建程序的少儿编程工具。",
		icon: "simple-icons:scratch",
		category: "frontend",
		level: "advanced",
		experience: { years: 6, months: 6 },
		projects: ["fruit-collect", "asteroid-crisis", "platform-parcool"],
		color: "#F7DF1E",
	},
	{
		id: "python",
		name: "Python",
		description:
			"一个容易上手且扩展性强的编程语言。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 3, months: 9 },
		projects: ["hello-world","turtle","snake"],
		color: "#3178C6",
	},

	// Backend Skills
	{
		id: "cpp",
		name: "C++",
		description:
			"一个常用于软件开发等的编译型高级语言。",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "beginner",
		experience: { years: 1, months: 4 },
		projects: ["hello-world"],
		color: "#00599C",
	},



	// Database Skills


	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"一个常见的分布式版本管理系统。",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 11 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"一个轻量但扩展强大的代码编辑器。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 7 },
		color: "#007ACC",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"一个由Jetbrains开发的专业Python IDE。",
		icon: "logos:pycharm",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 4 },
		color: "#21D789",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"一个开源的操作系统，有许多发行版，可操作性强。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#FCC624",
	},

	// Other Skills

];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
