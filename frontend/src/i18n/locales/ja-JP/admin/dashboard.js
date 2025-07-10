export default {
  dashboard: {
    systemOverview: "システム概要",
    refresh: "更新",
    refreshing: "更新中...",
    fetchError: "データ取得失敗",
    loading: "読み込み中...",
    error: "読み込み失敗",

    // 統計カード
    totalPastes: "テキスト共有数",
    totalFiles: "ファイルアップロード数",
    totalApiKeys: "APIキー数",
    totalS3Configs: "S3設定数",
    totalStorageUsed: "ストレージ使用量",

    // キャッシュ監視
    cacheMonitoring: "キャッシュ監視",
    directoryCache: "ディレクトリキャッシュ",
    s3UrlCache: "S3 URLキャッシュ",
    searchCache: "検索キャッシュ",
    hitRate: "ヒット率",
    cacheItems: "キャッシュ項目数",
    cacheUnavailable: "キャッシュデータ利用不可",
    clearAllCache: "全キャッシュ削除",

    // ストレージ関連
    storageUsage: "ストレージ使用状況",
    allBuckets: "すべてのストレージバケット",
    selectBucket: "ストレージバケット選択",
    usagePercent: "使用率",
    availableStorage: "空き容量",
    usedStorage: "使用済容量",
    storageUnits: {
      bytes: "バイト",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB",
    },

    // グラフ関連
    chartTitle: "過去7日間のアクティビティ統計",
    chartType: {
      bar: "棒グラフ",
      line: "折れ線グラフ",
      toggle: "グラフタイプ切替",
    },
    weeklyStats: "週間統計",
    weeklyActivity: "週間アクティビティ",
    weeklyPastes: "週間テキスト数",
    weeklyFiles: "週間ファイル数",
    mostActiveDate: "最も活発な日",
    highestDailyActivity: "最高日別アクティビティ",
    activityOverview: "アクティビティ概要",
    items: "件",
    switchToLineChart: "折れ線グラフに切替",
    switchToBarChart: "棒グラフに切替",
    dailyActivity: "日別アクティビティ",
    noData: "データなし",

    // 時間関連
    lastUpdated: "最終更新時刻",
    timeAgo: "{time}前",
    justNow: "たった今",

    // ストレージプロバイダ
    providers: {
      cloudflareR2: "Cloudflare R2",
      backblazeB2: "Backblaze B2",
      awsS3: "AWS S3",
      other: "その他プロバイダ",
    },

    // ステータス情報
    status: {
      healthy: "正常",
      warning: "警告",
      error: "エラー",
      offline: "オフライン",
    },

    // 操作ボタン
    actions: {
      viewDetails: "詳細表示",
      manage: "管理",
      configure: "設定",
      export: "データエクスポート",
    },

    // システム情報
    systemVersion: "システムバージョン",
    serverEnvironment: "サーバ環境",
    dataStorage: "データストレージ",

    // ストレージバケット分布
    storageBucketDistribution: "ストレージバケット分布",
    otherStorage: "その他ストレージ",

    // ヒントメッセージ
    tips: {
      noApiKeys: "APIキーがまだ作成されていません",
      noS3Configs: "S3ストレージがまだ設定されていません",
      noActivity: "最近のアクティビティがありません",
      lowStorage: "ストレージ容量不足",
    },
  },
};