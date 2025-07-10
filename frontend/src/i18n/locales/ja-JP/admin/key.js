export default {
  "keyManagement": {
    "title": "APIキー管理",
    "refresh": "更新",
    "bulkDelete": "一括削除",
    "delete": "削除",
    "create": "新しいAPIキーを作成",
    "createShort": "作成",
    "lastRefreshed": "最終更新",
    "table": {
      "select": "選択",
      "name": "名称",
      "key": "キー",
      "permissions": "権限",
      "basicPath": "ベースパス",
      "expires": "有効期限",
      "lastUsed": "最終使用",
      "actions": "操作",
      "noData": "APIキーはありません",
      "loading": "読み込み中..."
    },
    "keyName": "名称",
    "key": "キー",
    "permissions": {
      "text": "テキスト",
      "file": "ファイル",
      "mount": "マウント",
      "readOnly": "読み取り専用",
      "none": "なし"
    },
    "permissionsColumn": "権限",
    "basicPath": "ベースパス",
    "createdAt": "作成日時",
    "expiresAt": "有効期限",
    "lastUsed": "最終使用",
    "actions": "操作",
    "loading": "読み込み中...",
    "loadingKeys": "キーの読み込み中...",
    "neverUsed": "未使用",
    "noKeysTitle": "APIキーがありません",
    "noKeysDescription": "APIキーをまだ作成していません。上記のボタンから最初のキーを作成してください",
    "textPermissionFull": "テキスト",
    "filePermissionFull": "ファイル",
    "mountPermissionFull": "マウント",
    "noPermission": "権限なし",
    "copyKey": "コピー",
    "copyKeyFull": "キー全体をコピー",
    "edit": "編集",
    "deleteKey": "削除",
    "neverExpires": "有効期限なし",
    "createModal": {
      "title": "新しいAPIキーを作成",
      "tabs": {
        "basic": "基本情報",
        "path": "パス選択"
      },
      "keyName": "キー名称",
      "keyNamePlaceholder": "キー名称を入力",
      "keyNameHelp": "APIキーを識別しやすい名称を設定します",
      "useCustomKey": "カスタムキーを使用",
      "customKey": "カスタムキー",
      "customKeyPlaceholder": "カスタムキーを入力（オプション）",
      "customKeyHelp": "英数字、アンダースコア、ハイフンのみ使用可能",
      "expiration": "有効期限",
      "expirationOptions": {
        "1d": "1日",
        "7d": "7日",
        "30d": "30日",
        "never": "有効期限なし",
        "custom": "カスタム"
      },
      "customExpiration": "カスタム有効期限",
      "customExpirationPlaceholder": "日数を入力",
      "permissions": {
        "text": "テキスト権限",
        "file": "ファイル権限",
        "mount": "マウント権限"
      },
      "textPermission": "テキスト権限",
      "filePermission": "ファイル権限",
      "mountPermission": "マウント権限",
      "readOnlyMount": "読み取り専用マウント",
      "basicPath": "ベースパス",
      "basicPathPlaceholder": "/",
      "basicPathHelp": "APIキーがアクセス可能なベースパスを設定します（デフォルトはルートパス）",
      "selectPath": "パスを選択",
      "securityTip": "セキュリティヒント",
      "securityMessage": "APIキーは公開場所や安全でない環境で使用しないでください。",
      "pathSelector": {
        "title": "ベースパスを選択",
        "rootDirectory": "ルートディレクトリ",
        "selectDirectory": "ディレクトリを選択",
        "currentPath": "現在の選択",
        "confirm": "パスを確認",
        "cancel": "キャンセル",
        "loading": "読み込み中...",
        "loadError": "読み込み失敗",
        "noDirectories": "このディレクトリにサブディレクトリがありません"
      },
      "create": "作成",
      "creating": "作成中...",
      "processing": "処理中...",
      "cancel": "キャンセル",
      "errors": {
        "nameRequired": "キー名称を入力してください",
        "customKeyRequired": "カスタムキーを入力してください",
        "customKeyFormat": "カスタムキーの形式が正しくありません（英数字、アンダースコア、ハイフンのみ使用可能）",
        "expirationRequired": "カスタム有効期限を入力してください",
        "invalidExpiration": "無効な有効期限です",
        "createFailed": "キーの作成に失敗しました"
      }
    },
    "editModal": {
      "title": "APIキーを編集",
      "tabs": {
        "basic": "基本情報",
        "path": "パス選択"
      },
      "keyName": "キー名称",
      "keyNamePlaceholder": "キー名称を入力",
      "keyNameHelp": "APIキーを識別しやすい名称を設定します",
      "expiration": "有効期限",
      "expirationOptions": {
        "1d": "1日",
        "7d": "7日",
        "30d": "30日",
        "never": "有効期限なし",
        "custom": "カスタム"
      },
      "customExpiration": "カスタム有効期限",
      "customExpirationPlaceholder": "日数を入力",
      "permissions": {
        "text": "テキスト権限",
        "file": "ファイル権限",
        "mount": "マウント権限"
      },
      "textPermission": "テキスト権限",
      "filePermission": "ファイル権限",
      "mountPermission": "マウント権限",
      "basicPath": "ベースパス",
      "basicPathPlaceholder": "/",
      "basicPathHelp": "APIキーがアクセス可能なベースパスを設定します（デフォルトはルートパス）",
      "selectPath": "パスを選択",
      "securityTip": "セキュリティヒント",
      "securityMessage": "APIキーは公開場所や安全でない環境で使用しないでください。",
      "pathSelector": {
        "title": "ベースパスを選択",
        "rootDirectory": "ルートディレクトリ",
        "selectDirectory": "ディレクトリを選択",
        "currentPath": "現在の選択",
        "confirm": "パスを確認",
        "cancel": "キャンセル",
        "loading": "読み込み中...",
        "loadError": "読み込み失敗",
        "noDirectories": "このディレクトリにサブディレクトリがありません"
      },
      "update": "更新",
      "updating": "更新中...",
      "processing": "処理中...",
      "cancel": "キャンセル",
      "errors": {
        "nameRequired": "キー名称を入力してください",
        "expirationRequired": "カスタム有効期限を入力してください",
        "invalidExpiration": "無効な有効期限です",
        "updateFailed": "キーの更新に失敗しました"
      }
    },
    "success": {
      "created": "APIキーの作成に成功しました",
      "createdAndCopied": "キーが作成されクリップボードにコピーされました",
      "updated": "APIキーの更新に成功しました",
      "deleted": "APIキーの削除に成功しました",
      "bulkDeleted": "選択した {count} 個のキーを一括削除しました",
      "copied": "キーがクリップボードにコピーされました"
    },
    "error": {
      "cannotLoadList": "キー一覧を読み込めません",
      "loadFailed": "APIキーの読み込みに失敗しました",
      "copyFailed": "クリップボードへのコピーに失敗しました",
      "deleteFailed": "キーの削除に失敗しました",
      "bulkDeleteFailed": "一括削除に失敗しました",
      "noKeysSelected": "削除するキーを選択してください"
    },
    "confirmDelete": "キー \"{name}\" を削除しますか？この操作は元に戻せません。",
    "confirmBulkDelete": "選択した {count} 個のキーを削除しますか？この操作は元に戻せません。",
    "selectKeysFirst": "まず削除するキーを選択してください",
    "bulkDeleteConfirm": "選択した {count} 個のキーを削除しますか？この操作は元に戻せません。"
  }
};