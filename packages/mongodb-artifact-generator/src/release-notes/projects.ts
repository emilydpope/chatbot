export type Project = {
  name: string;
  description: string;
  validateReleaseVersionFormat(version: string): boolean;
  getReleaseArtifacts(version: string): Promise<ReleaseArtifact[]>;
};

export type GitCommitArtifact = {
  type: "git-commit";
  data: {
    hash: string;
    message: string;
    files: {
      fileName: string;
      additions: number;
      deletions: number;
      changes: number;
      hash: string;
      status: string;
    }[];
  };
};

export type GitDiffArtifact = {
  type: "git-diff";
  data: {
    oldHash: string;
    newHash: string;
    fileName: string;
    diff: string;
  };
};

export type JiraLinkedGitCommit = {
  repo: {
    owner: string;
    name: string;
    url: string;
  };
  hash: GitCommitArtifact["data"]["hash"];
  message: GitCommitArtifact["data"]["message"];
  files?: GitCommitArtifact["data"]["files"];
};

export type JiraIssueArtifact = {
  type: "jira-issue";
  data: {
    key: string;
    summary: string;
    description: string;
    components: string[];
    fixVersions: string[];
    resolution: string;
    priority: string;
    status: string;
    issuetype: string;
    linkedGitCommits?: JiraLinkedGitCommit[];
  };
};

export type ReleaseArtifact =
  | GitCommitArtifact
  | GitDiffArtifact
  | JiraIssueArtifact;

export function releaseArtifactIdentifier({ type, data }: ReleaseArtifact) {
  switch (type) {
    case "git-commit":
      return `${type}::${data.hash}`;
    case "git-diff":
      return `${type}::${data.fileName}:${data.oldHash}...${data.newHash}`;
    case "jira-issue":
      return `${type}::${data.key}`;
  }
}
export function releaseArtifactSummaryIdentifier({
  type,
}: ReleaseArtifactSummary["artifact"]) {
  return `${type}-${Date.now()}`;
}

export function releaseArtifactShortMetadata({ type, data }: ReleaseArtifact) {
  switch (type) {
    case "git-commit": {
      return {
        type: type,
        hash: data.hash,
        message: data.message,
      };
    }
    case "git-diff": {
      return {
        type: type,
        oldHash: data.oldHash,
        newHash: data.newHash,
        fileName: data.fileName,
      };
    }
    case "jira-issue": {
      const metadata = {
        type: type,
        key: data.key,
        summary: data.summary,
      };
      if (data.linkedGitCommits?.[0]) {
        Object.assign(metadata, {
          linkedGitCommits: data.linkedGitCommits.map((commit) => ({
            repo: commit.repo,
            hash: commit.hash,
            message: commit.message,
          })),
        });
      }
      return metadata;
    }
  }
}

export type ReleaseArtifactShortMetadata = ReturnType<
  typeof releaseArtifactShortMetadata
>;

export type ReleaseArtifactSummary = {
  artifact: ReleaseArtifactShortMetadata;
  summary: string;
};

// | {
//     type: "jira-release";
//     data: {
//       version: string;
//       description: string;
//     };
//   }
// | {
//     type: "jira-changelog";
//     data: {
//       version: string;
//       issues: string[];
//     };
//   }
